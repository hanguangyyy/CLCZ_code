var srtm = ee.Image("USGS/SRTMGL1_003") // DEM
var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[114.17403113952541, 22.32401128014577],
         [114.02123719336348, 22.43146992327585]]);
var gub = ee.FeatureCollection('projects/globallcz/assets/gub/gub_code')
var hk = gub.filterBounds(geometry)
var roi = hk
var name = 'hk'
var year = '2023'

var disshk = ee.Image('projects/ee-belly200023/assets/featurehk/diss2022hk') // Replace with the image from the texture feature extraction step
var savghk = ee.Image('projects/ee-belly200023/assets/featurehk/savg2022hk') // Replace with the image from the texture feature extraction step
var diss = disshk.clip(roi)
var savg = savghk.clip(roi)

var training_samples = ee.FeatureCollection('users/chuangchun1/tv/hktraining2020').select('F4');     //  Replace with training samples of different scales, such as provinces or regions
var validation_samples = ee.FeatureCollection('users/chuangchun1/tv/hkvalidating2020').select('F4');   // Replace with validation samples of different scales, such as provinces or regions

print(training_samples.first())
print(validation_samples.first())


//After the above operation, the samples is ready to merge with satellite image for classification.

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
The below is the operation target on different satellite image composite, this include:
1. Mask out cloud pixel for clear images if necessary.  
2. Derive spectral indices(NDVI, NDBI, NDWI).
3. Add spectral indices into image composite, calculate and output the mean/median of aggregate pixel value (to oebtain clearest images).  
4. Add single co-polarization (vertical transmit/vertical receive), dual-band cross-polarization (vertical transmit/horizontal receive) 
5. Add elevation DEM to the study area
6. Add forest canopy height to the study area
7. Add night light scene (Avg_vis) to the study area
8. Combine and stack all variables togather
*/

// 1. Define a function to mask out cloud pixel of sentinel 2.
    function maskS2Clouds(image) {
      var qa = image.select('QA60');                        //QA60 is the cloud mask of sentinel images.
      var cloudBitMask = ee.Number(2).pow(10).int();        // Bits 10 and 11 are clouds and cirrus, respectively.
      var cirrusBitMask = ee.Number(2).pow(11).int();   
      var mask = qa.bitwiseAnd(cloudBitMask).eq(0).and(     // 0 indicating clear conditions.
                 qa.bitwiseAnd(cirrusBitMask).eq(0));
      return image.updateMask(mask).divide(10000)           // Return the masked and scaled data, only with normal bands (B*).
          .select("B.*")
          .copyProperties(image, ["system:time_start"]);
      }



// 2.  (Optionl, not used in this classification) Define functinos to derive spectral indices (NDVI, NDBI, NDWI) from sentinel 2
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return image.addBands(ndvi);
};
var addMNDWI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B10']).rename('MNDWI');
  return image.addBands(ndvi);
};


// 3. Combine the spectral indices with sentinel 2. 
    var S2 = ee.ImageCollection('COPERNICUS/S2')            //Define Sentinel 2 collection
    .filterDate('2023-01-01', '2023-12-31')                 //Define date used
    .filterBounds(roi)                       //Define Region of Interest
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))    // Pre-filter cloudy granules to reduce computation time
    .map(maskS2Clouds)                                    // Apply operation (1) to sentinel 2 to remove cloud.
    .map(addNDVI)
    .map(addMNDWI)
    
    //Stack all sentinel 2 image togather, clip to region of interest, and calculated the aggregate value of each pixels 
    var sentinel2 = S2.mean().clip(roi); 
    print(sentinel2,'sentinel2')
    // Map the resulted Sentinel 2 product in true colour (Optional, will increase computation time) 
    Map.addLayer(sentinel2, {min: 0, max: 0.3, bands: ['B4', 'B3', 'B2']}, 'Clear Sentinel Image');


// 4. Add elevation DEM for the study area.
    var srtm = srtm
              .clip(roi);


// 5. Add night light scene for the study area
    var nightLight = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG')
        .filterDate('2023-01-01', '2023-12-31')
        .filterBounds(roi)
        .mean()   //clearest image    
        .clip(roi);
    

// 6. Combine all variables from all sources togather 
    var composite = ee.Image([//sentinel1.select('VV','VH'),
                              sentinel2.select('B1','B2', 'B3', 'B4', 'B5', 'B6', 'B7','B8', 'B8A', 'B9', 'B10', 'B11','B12','NDVI','MNDWI'),
                              srtm.select('elevation'),
                              nightLight.select('avg_rad'),
                              savg.rename('savg'),
                              diss.rename('diss')
                              ]);


// show the result details on the right panel for confirmation

// 1. Define the variables used for classification.
    //var bands = ['B1','B2', 'B3', 'B4', 'B5', 'B6', 'B7','B8', 'B8A', 'B9', 'B10', 'B11','B12','NDVI','MNDWI', 'VV', 'VH', 'elevation', 'avg_rad','diss','savg'];
var bands = ['B1','B2', 'B3', 'B4', 'B5', 'B6', 'B7','B8', 'B8A', 'B9', 'B10', 'B11','B12','NDVI','MNDWI', 'elevation', 'avg_rad','diss','savg'];

Map.addLayer(composite)
// 2. Define the pixels used for classification training
    var training = composite.sampleRegions({
                    collection: training_samples,    // The Collection used for training
                    properties: ['F4'],             // The field used for trarining, F4 here represents the label for 2023
                    scale: 100,                       // 90 x 90m resolution
                    tileScale : 16                   // A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.
                    });
print('training feature:',training)


// 3. Train GEE by Random Forest Classifier using the defined pixels, classify the study area
    var trainedClassifier = ee.Classifier.smileRandomForest(200).train({
        features: training, 
        classProperty: 'F4', 
        inputProperties: bands                      // The variables defined before.
        });
    
        
    var classified = composite.classify(trainedClassifier);       //classify the study area



// 4. Generate a confusion matrix to evaluate training accuracy
   /* var trainAccuracy = trainedClassifier.confusionMatrix();
    var exportedTrainAccuracy = ee.Feature(null, {matrix: trainAccuracy.array()});      
   Export.table.toDrive({collection: ee.FeatureCollection(exportedTrainAccuracy),
                          description: 'Resubstitution_Accuracy',
                          folder: 'Google Earth Engine Output'+name,
                          fileNamePrefix: year+name+'_TrainingAccuracy',
                          fileFormat: 'CSV'
                          });
    print('Resubstitution error matrix: ', trainAccuracy);                            //(Optional) Print the calculation on the right panel, will increase computation time SIGNIFICANTLY
    print('Training overall accuracy: ', trainAccuracy.accuracy());         */          //(Optional) Print the overall training accuracy on  the right panel, will increase computation time SIGNIFICANTLY



// 5. Define pixels used for classification validating
    var validation = composite.sampleRegions({
                      collection: validation_samples,   //The Collection used for validating
                      properties: ['F4'],              // The field used for validating
                      scale: 100,                        // 90 x 90m resolution
                      tileScale : 16                    //A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.
                      });


// 6. Classify the validation sample using the classifier trained before
    var validated = validation.classify(trainedClassifier);



// 7. Generate confusion matrix for validation accuracy (MOST IMPORTANT MATRIX). 
    var testAccuracy = validated.errorMatrix('F4', 'classification');
    var exportedTestAccuracy = ee.Feature(null, {matrix: testAccuracy.array()});      //Export validation error matrix to drive to fasten calculation
     Export.table.toDrive({collection: ee.FeatureCollection(exportedTestAccuracy),
                          description: 'Validation_Accuracy',
                          folder: 'Google Earth Engine Output'+name,
                          fileNamePrefix: year+name+'_ValidationAccuracy',
                          fileFormat: 'CSV'
                          });
    print('Validation matrix', testAccuracy);                                         //(Optional)
    print('Validation overall accuracy: ', testAccuracy.accuracy());                  //(Optional)



// 1. Define visual representation parameter for each classes.
  var palette = ['#000000',
                 '#ff0000',   //1 compact highrise (red)
                 '#ff4400',   //2 compact midrise (red-orange)
                 '#ff9d00',   //3 compact lowrise (orange)
                 '#ffae00',   //4 open highrise
                 '#ffcc00',   //5 open midrise
                 '#fff200',   //6 open lowrise
                 '#f2ff00',   //7 lightweight lowrise
                 '#c3ff00',   //8 large lowrise
                 '#8cff00',   //9 sparsely built
                 '#a0a39b',   //10 heavy industry, grey 
                 '#692c2c',   //11 dense trees
                 '#694a2c',   //12 scattered trees
                 '#61692c',   //13 bush, scrub
                 '#45692c',   //14 low plants
                 '#875555',   //15 bare rock or paved
                 '#875585',   //16 bare soil or sand
                 '#3e71cf',   //17 water
                 '#3ec5cf',    //18 wetlands
                  ];


// 2. Map the classification results.
    Map.centerObject(samples, 9);                                         //Locate the pointer to the center of the map. Enlarge to 9
    Map.addLayer(classified, {min: 0, max: 18, palette: palette});        //Map the layer on the map


// 3. Export the result externally                

    Export.image.toDrive({image: classified,
                          description: year+'LCZ_'+name,
                          folder: 'Google Earth Engine Output'+name,
                          region: roi,
                          scale: 100,
                          fileFormat: 'GeoTIFF',
                          maxPixels: 10000000000000
                          });
    
