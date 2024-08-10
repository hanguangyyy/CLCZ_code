var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[114.17403113952541, 22.32401128014577],
         [114.02123719336348, 22.43146992327585]]);
var gub = ee.FeatureCollection('projects/globallcz/assets/gub/gub_code') // The Global Urban Boundary data
var hk=gub.filterBounds(geometry)
Map.addLayer(hk);

var bound = hk
var name = 'hk'
var folder = 'hongkong'
var dur = '3years'
var date_1 = '-01-01'
var date_2 = '-12-31'

function maskL8sr(image) {
  // Bit 0 - Fill
  // Bit 1 - Dilated Cloud
  // Bit 2 - Cirrus
  // Bit 3 - Cloud
  // Bit 4 - Cloud Shadow
  var qaMask = image.select('QA_PIXEL').bitwiseAnd(parseInt('11111', 2)).eq(0);
  var saturationMask = image.select('QA_RADSAT').eq(0);

  // Apply the scaling factors to the appropriate bands.
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);

  // Replace the original bands with the scaled ones and apply the masks.
  return image.addBands(opticalBands, null, true)
      .addBands(thermalBands, null, true)
      .updateMask(qaMask)
      .updateMask(saturationMask);
}

function maskL457sr(image) {
  // Bit 0 - Fill
  // Bit 1 - Dilated Cloud
  // Bit 2 - Unused
  // Bit 3 - Cloud
  // Bit 4 - Cloud Shadow
  var qaMask = image.select('QA_PIXEL').bitwiseAnd(parseInt('11111', 2)).eq(0);
  var saturationMask = image.select('QA_RADSAT').eq(0);

  // Apply the scaling factors to the appropriate bands.
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBand = image.select('ST_B6').multiply(0.00341802).add(149.0);

  // Replace the original bands with the scaled ones and apply the masks.
  return image.addBands(opticalBands, null, true)
      .addBands(thermalBand, null, true)
      .updateMask(qaMask)
      .updateMask(saturationMask);
}

var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
                  .filter(ee.Filter.calendarRange(1,12,'month'))
                  .filterBounds(bound)

var l7 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2')
                  .filter(ee.Filter.calendarRange(1,12,'month'))
                  .filterBounds(bound)
                  
var l5 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
                  .filter(ee.Filter.calendarRange(1,12,'month'))
                  .filterBounds(bound)
                  
var bands8 = ['SR_B2','SR_B3','SR_B4','SR_B5','SR_B6','SR_B7']
var bands75 = ['SR_B1','SR_B2','SR_B3','SR_B4','SR_B5','SR_B7']


Map.addLayer(bound)
// 2023
// Map the function over one year of data.
var collection = l8
                     .filterDate('2023-01-01', '2023-12-31')
                     .map(maskL8sr);

var composite = collection.median();
var composite = composite.select(bands8).clip(bound)

// Display the results.
Map.centerObject(bound, 12);  // Iberian Peninsula
Map.addLayer(composite, {bands: ['SR_B4', 'SR_B3', 'SR_B2'], min: 0, max: 0.3},'2023');

Export.image.toAsset({image:composite.toFloat(),description:'landsat2023'+name+dur,assetId:folder+'/landsat_2023_'+dur,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
