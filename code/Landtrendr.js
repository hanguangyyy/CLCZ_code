var imageVisParam = {"opacity":1,"bands":["yod"],"min":2001,"max":2022,"palette":["1b00ff","ff2806"]}

var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[114.17403113952541, 22.32401128014577],
         [114.02123719336348, 22.43146992327585]]);
var gub = ee.FeatureCollection('projects/globallcz/assets/gub/gub_code')
var hk=gub.filterBounds(geometry)


var aoi = hk
var name = 'hk'
var folder = 'yodhk'

var normal2000 = ee.Image('users/chuangchun1/normalizedhk/savg2000hk3years_normal') // Replace with the annual image from the normalization step
var normal2001 = ee.Image('users/chuangchun1/normalizedhk/savg2001hk3years_normal')
var normal2002 = ee.Image('users/chuangchun1/normalizedhk/savg2002hk3years_normal')
var normal2003 = ee.Image('users/chuangchun1/normalizedhk/savg2003hk3years_normal')
var normal2004 = ee.Image('users/chuangchun1/normalizedhk/savg2004hk3years_normal')
var normal2005 = ee.Image('users/chuangchun1/normalizedhk/savg2005hk3years_normal')
var normal2006 = ee.Image('users/chuangchun1/normalizedhk/savg2006hk3years_normal')
var normal2007 = ee.Image('users/chuangchun1/normalizedhk/savg2007hk3years_normal')
var normal2008 = ee.Image('users/chuangchun1/normalizedhk/savg2008hk3years_normal')
var normal2009 = ee.Image('users/chuangchun1/normalizedhk/savg2009hk3years_normal')
var normal2010 = ee.Image('users/chuangchun1/normalizedhk/savg2010hk3years_normal')
var normal2011 = ee.Image('users/chuangchun1/normalizedhk/savg2011hk3years_normal')
var normal2012 = ee.Image('users/chuangchun1/normalizedhk/savg2012hk3years_normal')
var normal2013 = ee.Image('users/chuangchun1/normalizedhk/savg2013hk3years_normal')
var normal2014 = ee.Image('users/chuangchun1/normalizedhk/savg2014hk3years_normal')
var normal2015 = ee.Image('users/chuangchun1/normalizedhk/savg2015hk3years_normal')
var normal2016 = ee.Image('users/chuangchun1/normalizedhk/savg2016hk3years_normal')
var normal2017 = ee.Image('users/chuangchun1/normalizedhk/savg2017hk3years_normal')
var normal2018 = ee.Image('users/chuangchun1/normalizedhk/savg2018hk3years_normal')
var normal2019 = ee.Image('users/chuangchun1/normalizedhk/savg2019hk3years_normal')
var normal2020 = ee.Image('users/chuangchun1/normalizedhk/savg2020hk3years_normal')
var normal2021 = ee.Image('users/chuangchun1/normalizedhk/savg2021hk3years_normal')
var normal2022 = ee.Image('users/chuangchun1/normalizedhk/savg2022hk3years_normal')
var normal2023 = ee.Image('users/chuangchun1/normalizedhk/savg2023hk3years_normal')

var normal2000 = normal2000.set('system:time_start', ee.Date('2000'+'-02-01').millis())
var normal2001 = normal2001.set('system:time_start', ee.Date('2001'+'-02-01').millis())
var normal2002 = normal2002.set('system:time_start', ee.Date('2002'+'-02-01').millis())
var normal2003 = normal2003.set('system:time_start', ee.Date('2003'+'-02-01').millis())
var normal2004 = normal2004.set('system:time_start', ee.Date('2004'+'-02-01').millis())
var normal2005 = normal2005.set('system:time_start', ee.Date('2005'+'-02-01').millis())
var normal2006 = normal2006.set('system:time_start', ee.Date('2006'+'-02-01').millis())
var normal2007 = normal2007.set('system:time_start', ee.Date('2007'+'-02-01').millis())
var normal2008 = normal2008.set('system:time_start', ee.Date('2008'+'-02-01').millis())
var normal2009 = normal2009.set('system:time_start', ee.Date('2009'+'-02-01').millis())
var normal2010 = normal2010.set('system:time_start', ee.Date('2010'+'-02-01').millis())
var normal2011 = normal2011.set('system:time_start', ee.Date('2011'+'-02-01').millis())
var normal2012 = normal2012.set('system:time_start', ee.Date('2012'+'-02-01').millis())
var normal2013 = normal2013.set('system:time_start', ee.Date('2013'+'-02-01').millis())
var normal2014 = normal2014.set('system:time_start', ee.Date('2014'+'-02-01').millis())
var normal2015 = normal2015.set('system:time_start', ee.Date('2015'+'-02-01').millis())
var normal2016 = normal2016.set('system:time_start', ee.Date('2016'+'-02-01').millis())
var normal2017 = normal2017.set('system:time_start', ee.Date('2017'+'-02-01').millis())
var normal2018 = normal2018.set('system:time_start', ee.Date('2018'+'-02-01').millis())
var normal2019 = normal2019.set('system:time_start', ee.Date('2019'+'-02-01').millis())
var normal2020 = normal2020.set('system:time_start', ee.Date('2020'+'-02-01').millis())
var normal2021 = normal2021.set('system:time_start', ee.Date('2021'+'-02-01').millis())
var normal2022 = normal2022.set('system:time_start', ee.Date('2022'+'-02-01').millis())
var normal2023 = normal2023.set('system:time_start', ee.Date('2023'+'-02-01').millis())

var normal = ee.ImageCollection.fromImages([normal2000.rename('diss'),normal2001.rename('diss'),normal2002.rename('diss'),normal2003.rename('diss'),normal2004.rename('diss'),
              normal2005.rename('diss'),normal2006.rename('diss'),normal2007.rename('diss'),normal2008.rename('diss'),normal2009.rename('diss'),normal2010.rename('diss'),normal2011.rename('diss'),
              normal2012.rename('diss'),normal2013.rename('diss'),normal2014.rename('diss'),normal2015.rename('diss'),normal2016.rename('diss'),normal2017.rename('diss'),normal2018.rename('diss'),
              normal2019.rename('diss'),normal2020.rename('diss'),normal2021.rename('diss'),normal2022.rename('diss'),normal2023.rename('diss')])
print(normal)

// Define start and end years.
var startYear = 2000;
var endYear = 2023;

var viz = {
  min: 1984,
  max: 2023,
  palette: ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']
};

// define disturbance mapping filter parameters 
var treeLoss1  = 175;      // delta filter for 1 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var treeLoss20 = 80;//80;      // delta filter for 20 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var preVal     = 400;      // pre-disturbance value threshold - values below the provided threshold will exclude disturbance for those pixels - units are in units of segIndex defined in the following function definition
var mmu        = 1;       // minimum mapping unit for disturbance patches - units of pixels

// Define AOI on the map.
Map.centerObject(geometry, 14);
//Map.addLayer(aoi, {color: 'f8766d'}, 'AOI');
Map.setOptions('HYBRID');

// Define a reducer.

var myReducer = ee.Reducer.mean();
//var myReducer = ee.Reducer.median();
//var myReducer = ee.Reducer.min();
//var myReducer = ee.Reducer.max();

// Make a list of years to generate composites for.
var yearList = ee.List.sequence(startYear, endYear);


// define the segmentation parameters:
// reference: Kennedy, R. E., Yang, Z., & Cohen, W. B. (2010). Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1. LandTrendr—Temporal segmentation algorithms. Remote Sensing of Environment, 114(12), 2897-2910.
//            https://github.com/eMapR/LT-GEE
var run_params = { 
  maxSegments:            6,
  spikeThreshold:         0.9,
  vertexCountOvershoot:   3,
  preventOneYearRecovery: true,
  recoveryThreshold:      0.25,
  pvalThreshold:          0.05,
  bestModelProportion:    0.75,
  minObservationsNeeded:  6
};
var changeParams = {
  delta:  'loss',
  sort:   'greatest',
  year:   {checked:true, start:1984, end:2023},
  mag:    {checked:true, value:0.15,  operator:'>'},
  dur:    {checked:true, value:4,    operator:'<'},
  preval: {checked:true, value:0.2,  operator:'>'},
  mmu:    {checked:true, value:11},
};
run_params.timeSeries = normal

var ltArrImg = ee.Algorithms.TemporalSegmentation.LandTrendr(run_params);

var ltPoints = ltArrImg.reduceRegions({
  collection: geometry,
  reducer: ee.Reducer.first(),
  scale: 30
});

var years=["2000","2001","2002","2003","2004",
            "2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015",
            "2016","2017","2018","2019","2020","2021","2022","2023"];

var lt=ltArrImg.select('LandTrendr').clip(aoi);

// The point feature collection is returned, but now each has LandTrendr
// segmentation information properties.

// #############################################################################
// ### PLOT SOURCE AND FITTED TIME SERIES FOR A SINGLE POINT ###
// #############################################################################

// Get the LandTrendr segmentation results from point: ID 0.
//var ltPoint = ee.Array(
//  ltPoints.filter(ee.Filter.eq('id', 0)).first().get('LandTrendr')
//);
var ltPoint = ee.Array(ltPoints.first().get('LandTrendr'));
print('Segmentation info array for pixel intersecting point ID 0', ltPoint);

// Slice out data to plot in time series chart.
var year = ltPoint.slice(0, 0, 1).transpose();
var yValues = ltPoint.slice(0, 1, 3).transpose();

// Make a time series chart.
var chart = ui.Chart.array.values(yValues, 0, year)
  .setSeriesNames(['Orig', 'Fit'])
  .setChartType('LineChart')
  .setOptions({
    title: 'LandTrendr source and fit',
    hAxis: {
      title: 'Year', format: '####',
      viewWindow: {min: startYear, max: endYear}
    },
    vAxis: {title: 'diss', format: '####'},
    pointSize: 0,
    lineWidth: 1
  });

print(chart);

// ----- function to extract greatest disturbance based on spectral delta besdeen vertices 
var extractDisturbance = function(lt, distDir, params, mmu) {
  // select only the vertices that represents a change
  var vertexMask = lt.arraySlice(0, 3, 4); // get the vertex - yes(1)/no(0) dimension
  var vertices = lt.arrayMask(vertexMask); // convert the 0's to masked

  // construct segment start and end point years and index values
  var left = vertices.arraySlice(1, 0, -1);    // slice out the vertices as the start of segments
  var right = vertices.arraySlice(1, 1, null); // slice out the vertices as the end of segments
  var startYear = left.arraySlice(0, 0, 1);    // get year dimension of LT data from the segment start vertices
  var startVal = left.arraySlice(0, 2, 3);     // get spectral index dimension of LT data from the segment start vertices
  var endYear = right.arraySlice(0, 0, 1);     // get year dimension of LT data from the segment end vertices 
  var endVal = right.arraySlice(0, 2, 3);      // get spectral index dimension of LT data from the segment end vertices

  var dur = endYear.subtract(startYear);       // subtract the segment start year from the segment end year to calculate the duration of segments 
  var mag = endVal.subtract(startVal);         // substract the segment start index value from the segment end index value to calculate the delta of segments 

  // concatenate segment start year, delta, duration, and starting spectral index value to an array 
  var distImg = ee.Image.cat([startYear.add(1), mag, dur, startVal.multiply(distDir)]).toArray(0); // make an image of segment attributes - multiply by the distDir parameter to re-orient the spectral index if it was flipped for segmentation - do it here so that the subtraction to calculate segment delta in the above line is consistent - add 1 to the detection year, because the vertex year is not the first year that change is detected, it is the following year

  // sort the segments in the disturbance attribute image delta by spectral index change delta  
  var distImgSorted = distImg.arraySort(mag.multiply(-1));                                  // flip the delta around so that the greatest delta segment is first in order

  // slice out the first (greatest) delta
  var tempDistImg = distImgSorted.arraySlice(1, 0, 1).unmask(ee.Image(ee.Array([[0],[0],[0],[0]])));                                      // get the first segment in the sorted array

  // make an image from the array of attributes for the greatest disturbance
  var finalDistImg = ee.Image.cat(tempDistImg.arraySlice(0,0,1).arrayProject([1]).arrayFlatten([['yod']]),     // slice out year of disturbance detection and re-arrange to an image band 
                                  tempDistImg.arraySlice(0,1,2).arrayProject([1]).arrayFlatten([['mag']]),     // slice out the disturbance magnitude and re-arrange to an image band 
                                  tempDistImg.arraySlice(0,2,3).arrayProject([1]).arrayFlatten([['dur']]),     // slice out the disturbance duration and re-arrange to an image band
                                  tempDistImg.arraySlice(0,3,4).arrayProject([1]).arrayFlatten([['preval']])); // slice out the pre-disturbance spectral value and re-arrange to an image band

  // filter out disturbances based on user settings
  var threshold = ee.Image(finalDistImg.select(['dur'])).lte(4)                        // get the disturbance band out to apply duration dynamic disturbance magnitude threshold 
                    //.multiply((params.tree_loss20 - params.tree_loss1) / 19.0)  // ...
                    //.add(params.tree_loss1)                                     //    ...interpolate the magnitude threshold over years besdeen a 1-year mag thresh and a 20-year mag thresh
                    //.lte(finalDistImg.select(['mag']))                          // ...is disturbance less then equal to the interpolated, duration dynamic disturbance magnitude threshold 
                    .and(finalDistImg.select(['mag']).gt(0.1))                    // and is greater than 0  
                    .and(finalDistImg.select(['preval']).gt(params.pre_val));   // and is greater than pre-disturbance spectral index value threshold

  // apply the filter mask
  finalDistImg = finalDistImg.mask(threshold).int16(); 

   // patchify the remaining disturbance pixels using a minimum mapping unit
  if(mmu > 1){
    var mmuPatches = finalDistImg.select(['yod'])           // patchify based on disturbances having the same year of detection
                            .connectedPixelCount(mmu, true) // count the number of pixel in a candidate patch
                            .gte(mmu);                      // are the the number of pixels per candidate patch greater than user-defined minimum mapping unit?
    finalDistImg = finalDistImg.updateMask(mmuPatches);     // mask the pixels/patches that are less than minimum mapping unit
  } 

  return finalDistImg; // return the filtered greatest disturbance attribute image
};

// run the dist extract function
// define disturbance mapping filter parameters 
var treeLoss1  = 0.3;      // delta filter for 1 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var treeLoss20 = 0.2;//80;      // delta filter for 20 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var preVal     = 0.200;      // pre-disturbance value threshold - values below the provided threshold will exclude disturbance for those pixels - units are in units of segIndex defined in the following function definition
var mmu        = 1;       // minimum mapping unit for disturbance patches - units of pixels

var distParams = {
  tree_loss1: treeLoss1,
  tree_loss20: treeLoss20,  
  pre_val: preVal           
};
var distDir = 1;
var exportImg = extractDisturbance(ltArrImg.select('LandTrendr'), distDir, distParams).select(['yod']).clip(aoi).unmask(0).short();
Map.addLayer(exportImg.selfMask(),imageVisParam,'yod')
//Export.image.toAsset({image:exportImg,description:'gainYearFinal',assetId:'JJJ/gainYearFinal'+'_'+name+'_mag10','pyramidingPolicy': {".default": "mode"},crs: 'EPSG:4326',region:aoi,scale:30,maxPixels:1e13})
Export.image.toAsset({image:exportImg.toInt(),description:'gainYearFinalsavg'+name,assetId:folder+'/yodsavg'+name,'pyramidingPolicy': {".default": "mode"},crs: 'EPSG:4326',region:aoi,scale:30,maxPixels:1e13})

//##### DISS #####
var normal2000 = ee.Image('users/chuangchun1/normalizedhk/diss2000hk3years_normal')
var normal2001 = ee.Image('users/chuangchun1/normalizedhk/diss2001hk3years_normal')
var normal2002 = ee.Image('users/chuangchun1/normalizedhk/diss2002hk3years_normal')
var normal2003 = ee.Image('users/chuangchun1/normalizedhk/diss2003hk3years_normal')
var normal2004 = ee.Image('users/chuangchun1/normalizedhk/diss2004hk3years_normal')
var normal2005 = ee.Image('users/chuangchun1/normalizedhk/diss2005hk3years_normal')
var normal2006 = ee.Image('users/chuangchun1/normalizedhk/diss2006hk3years_normal')
var normal2007 = ee.Image('users/chuangchun1/normalizedhk/diss2007hk3years_normal')
var normal2008 = ee.Image('users/chuangchun1/normalizedhk/diss2008hk3years_normal')
var normal2009 = ee.Image('users/chuangchun1/normalizedhk/diss2009hk3years_normal')
var normal2010 = ee.Image('users/chuangchun1/normalizedhk/diss2010hk3years_normal')
var normal2011 = ee.Image('users/chuangchun1/normalizedhk/diss2011hk3years_normal')
var normal2012 = ee.Image('users/chuangchun1/normalizedhk/diss2012hk3years_normal')
var normal2013 = ee.Image('users/chuangchun1/normalizedhk/diss2013hk3years_normal')
var normal2014 = ee.Image('users/chuangchun1/normalizedhk/diss2014hk3years_normal')
var normal2015 = ee.Image('users/chuangchun1/normalizedhk/diss2015hk3years_normal')
var normal2016 = ee.Image('users/chuangchun1/normalizedhk/diss2016hk3years_normal')
var normal2017 = ee.Image('users/chuangchun1/normalizedhk/diss2017hk3years_normal')
var normal2018 = ee.Image('users/chuangchun1/normalizedhk/diss2018hk3years_normal')
var normal2019 = ee.Image('users/chuangchun1/normalizedhk/diss2019hk3years_normal')
var normal2020 = ee.Image('users/chuangchun1/normalizedhk/diss2020hk3years_normal')
var normal2021 = ee.Image('users/chuangchun1/normalizedhk/diss2021hk3years_normal')
var normal2022 = ee.Image('users/chuangchun1/normalizedhk/diss2022hk3years_normal')
var normal2023 = ee.Image('users/chuangchun1/normalizedhk/diss2023hk3years_normal')

var normal2000 = normal2000.set('system:time_start', ee.Date('2000'+'-02-01').millis())
var normal2001 = normal2001.set('system:time_start', ee.Date('2001'+'-02-01').millis())
var normal2002 = normal2002.set('system:time_start', ee.Date('2002'+'-02-01').millis())
var normal2003 = normal2003.set('system:time_start', ee.Date('2003'+'-02-01').millis())
var normal2004 = normal2004.set('system:time_start', ee.Date('2004'+'-02-01').millis())
var normal2005 = normal2005.set('system:time_start', ee.Date('2005'+'-02-01').millis())
var normal2006 = normal2006.set('system:time_start', ee.Date('2006'+'-02-01').millis())
var normal2007 = normal2007.set('system:time_start', ee.Date('2007'+'-02-01').millis())
var normal2008 = normal2008.set('system:time_start', ee.Date('2008'+'-02-01').millis())
var normal2009 = normal2009.set('system:time_start', ee.Date('2009'+'-02-01').millis())
var normal2010 = normal2010.set('system:time_start', ee.Date('2010'+'-02-01').millis())
var normal2011 = normal2011.set('system:time_start', ee.Date('2011'+'-02-01').millis())
var normal2012 = normal2012.set('system:time_start', ee.Date('2012'+'-02-01').millis())
var normal2013 = normal2013.set('system:time_start', ee.Date('2013'+'-02-01').millis())
var normal2014 = normal2014.set('system:time_start', ee.Date('2014'+'-02-01').millis())
var normal2015 = normal2015.set('system:time_start', ee.Date('2015'+'-02-01').millis())
var normal2016 = normal2016.set('system:time_start', ee.Date('2016'+'-02-01').millis())
var normal2017 = normal2017.set('system:time_start', ee.Date('2017'+'-02-01').millis())
var normal2018 = normal2018.set('system:time_start', ee.Date('2018'+'-02-01').millis())
var normal2019 = normal2019.set('system:time_start', ee.Date('2019'+'-02-01').millis())
var normal2020 = normal2020.set('system:time_start', ee.Date('2020'+'-02-01').millis())
var normal2021 = normal2021.set('system:time_start', ee.Date('2021'+'-02-01').millis())
var normal2022 = normal2022.set('system:time_start', ee.Date('2022'+'-02-01').millis())
var normal2023 = normal2023.set('system:time_start', ee.Date('2023'+'-02-01').millis())

var normal = ee.ImageCollection.fromImages([normal2000.rename('diss'),normal2001.rename('diss'),normal2002.rename('diss'),normal2003.rename('diss'),normal2004.rename('diss'),
              normal2005.rename('diss'),normal2006.rename('diss'),normal2007.rename('diss'),normal2008.rename('diss'),normal2009.rename('diss'),normal2010.rename('diss'),normal2011.rename('diss'),
              normal2012.rename('diss'),normal2013.rename('diss'),normal2014.rename('diss'),normal2015.rename('diss'),normal2016.rename('diss'),normal2017.rename('diss'),normal2018.rename('diss'),
              normal2019.rename('diss'),normal2020.rename('diss'),normal2021.rename('diss'),normal2022.rename('diss'),normal2023.rename('diss')])
print(normal)

// Define start and end years.
var startYear = 2000;
var endYear = 2023;

var viz = {
  min: 1984,
  max: 2023,
  palette: ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']
};

// define disturbance mapping filter parameters 
var treeLoss1  = 175;      // delta filter for 1 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var treeLoss20 = 80;//80;      // delta filter for 20 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var preVal     = 400;      // pre-disturbance value threshold - values below the provided threshold will exclude disturbance for those pixels - units are in units of segIndex defined in the following function definition
var mmu        = 1;       // minimum mapping unit for disturbance patches - units of pixels

// Define AOI on the map.
Map.centerObject(geometry, 14);
//Map.addLayer(aoi, {color: 'f8766d'}, 'AOI');
Map.setOptions('HYBRID');

// Define a reducer.

var myReducer = ee.Reducer.mean();
//var myReducer = ee.Reducer.median();
//var myReducer = ee.Reducer.min();
//var myReducer = ee.Reducer.max();

// Make a list of years to generate composites for.
var yearList = ee.List.sequence(startYear, endYear);


// define the segmentation parameters:
// reference: Kennedy, R. E., Yang, Z., & Cohen, W. B. (2010). Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1. LandTrendr—Temporal segmentation algorithms. Remote Sensing of Environment, 114(12), 2897-2910.
//            https://github.com/eMapR/LT-GEE
var run_params = { 
  maxSegments:            6,
  spikeThreshold:         0.9,
  vertexCountOvershoot:   3,
  preventOneYearRecovery: true,
  recoveryThreshold:      0.25,
  pvalThreshold:          0.05,
  bestModelProportion:    0.75,
  minObservationsNeeded:  6
};
var changeParams = {
  delta:  'loss',
  sort:   'greatest',
  year:   {checked:true, start:1984, end:2023},
  mag:    {checked:true, value:0.15,  operator:'>'},
  dur:    {checked:true, value:4,    operator:'<'},
  preval: {checked:true, value:0.2,  operator:'>'},
  mmu:    {checked:true, value:11},
};
run_params.timeSeries = normal

var ltArrImg = ee.Algorithms.TemporalSegmentation.LandTrendr(run_params);

var ltPoints = ltArrImg.reduceRegions({
  collection: geometry,
  reducer: ee.Reducer.first(),
  scale: 30
});

var years=["2000","2001","2002","2003","2004",
            "2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015",
            "2016","2017","2018","2019","2020","2021","2022","2023"];

var lt=ltArrImg.select('LandTrendr').clip(aoi);

// The point feature collection is returned, but now each has LandTrendr
// segmentation information properties.

// #############################################################################
// ### PLOT SOURCE AND FITTED TIME SERIES FOR A SINGLE POINT ###
// #############################################################################

// Get the LandTrendr segmentation results from point: ID 0.
//var ltPoint = ee.Array(
//  ltPoints.filter(ee.Filter.eq('id', 0)).first().get('LandTrendr')
//);
var ltPoint = ee.Array(ltPoints.first().get('LandTrendr'));
print('Segmentation info array for pixel intersecting point ID 0', ltPoint);

// Slice out data to plot in time series chart.
var year = ltPoint.slice(0, 0, 1).transpose();
var yValues = ltPoint.slice(0, 1, 3).transpose();

// Make a time series chart.
var chart = ui.Chart.array.values(yValues, 0, year)
  .setSeriesNames(['Orig', 'Fit'])
  .setChartType('LineChart')
  .setOptions({
    title: 'LandTrendr source and fit',
    hAxis: {
      title: 'Year', format: '####',
      viewWindow: {min: startYear, max: endYear}
    },
    vAxis: {title: 'diss', format: '####'},
    pointSize: 0,
    lineWidth: 1
  });

print(chart);

// ----- function to extract greatest disturbance based on spectral delta besdeen vertices 
var extractDisturbance = function(lt, distDir, params, mmu) {
  // select only the vertices that represents a change
  var vertexMask = lt.arraySlice(0, 3, 4); // get the vertex - yes(1)/no(0) dimension
  var vertices = lt.arrayMask(vertexMask); // convert the 0's to masked

  // construct segment start and end point years and index values
  var left = vertices.arraySlice(1, 0, -1);    // slice out the vertices as the start of segments
  var right = vertices.arraySlice(1, 1, null); // slice out the vertices as the end of segments
  var startYear = left.arraySlice(0, 0, 1);    // get year dimension of LT data from the segment start vertices
  var startVal = left.arraySlice(0, 2, 3);     // get spectral index dimension of LT data from the segment start vertices
  var endYear = right.arraySlice(0, 0, 1);     // get year dimension of LT data from the segment end vertices 
  var endVal = right.arraySlice(0, 2, 3);      // get spectral index dimension of LT data from the segment end vertices

  var dur = endYear.subtract(startYear);       // subtract the segment start year from the segment end year to calculate the duration of segments 
  var mag = endVal.subtract(startVal);         // substract the segment start index value from the segment end index value to calculate the delta of segments 

  // concatenate segment start year, delta, duration, and starting spectral index value to an array 
  var distImg = ee.Image.cat([startYear.add(1), mag, dur, startVal.multiply(distDir)]).toArray(0); // make an image of segment attributes - multiply by the distDir parameter to re-orient the spectral index if it was flipped for segmentation - do it here so that the subtraction to calculate segment delta in the above line is consistent - add 1 to the detection year, because the vertex year is not the first year that change is detected, it is the following year

  // sort the segments in the disturbance attribute image delta by spectral index change delta  
  var distImgSorted = distImg.arraySort(mag.multiply(-1));                                  // flip the delta around so that the greatest delta segment is first in order

  // slice out the first (greatest) delta
  var tempDistImg = distImgSorted.arraySlice(1, 0, 1).unmask(ee.Image(ee.Array([[0],[0],[0],[0]])));                                      // get the first segment in the sorted array

  // make an image from the array of attributes for the greatest disturbance
  var finalDistImg = ee.Image.cat(tempDistImg.arraySlice(0,0,1).arrayProject([1]).arrayFlatten([['yod']]),     // slice out year of disturbance detection and re-arrange to an image band 
                                  tempDistImg.arraySlice(0,1,2).arrayProject([1]).arrayFlatten([['mag']]),     // slice out the disturbance magnitude and re-arrange to an image band 
                                  tempDistImg.arraySlice(0,2,3).arrayProject([1]).arrayFlatten([['dur']]),     // slice out the disturbance duration and re-arrange to an image band
                                  tempDistImg.arraySlice(0,3,4).arrayProject([1]).arrayFlatten([['preval']])); // slice out the pre-disturbance spectral value and re-arrange to an image band

  // filter out disturbances based on user settings
  var threshold = ee.Image(finalDistImg.select(['dur'])).lte(4)                        // get the disturbance band out to apply duration dynamic disturbance magnitude threshold 
                    //.multiply((params.tree_loss20 - params.tree_loss1) / 19.0)  // ...
                    //.add(params.tree_loss1)                                     //    ...interpolate the magnitude threshold over years besdeen a 1-year mag thresh and a 20-year mag thresh
                    //.lte(finalDistImg.select(['mag']))                          // ...is disturbance less then equal to the interpolated, duration dynamic disturbance magnitude threshold 
                    .and(finalDistImg.select(['mag']).gt(0.2))                    // and is greater than 0  
                    .and(finalDistImg.select(['preval']).gt(params.pre_val));   // and is greater than pre-disturbance spectral index value threshold

  // apply the filter mask
  finalDistImg = finalDistImg.mask(threshold).int16(); 

   // patchify the remaining disturbance pixels using a minimum mapping unit
  if(mmu > 1){
    var mmuPatches = finalDistImg.select(['yod'])           // patchify based on disturbances having the same year of detection
                            .connectedPixelCount(mmu, true) // count the number of pixel in a candidate patch
                            .gte(mmu);                      // are the the number of pixels per candidate patch greater than user-defined minimum mapping unit?
    finalDistImg = finalDistImg.updateMask(mmuPatches);     // mask the pixels/patches that are less than minimum mapping unit
  } 

  return finalDistImg; // return the filtered greatest disturbance attribute image
};

// run the dist extract function
// define disturbance mapping filter parameters 
var treeLoss1  = 0.3;      // delta filter for 1 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var treeLoss20 = 0.2;//80;      // delta filter for 20 year duration disturbance, <= will not be included as disturbance - units are in units of segIndex defined in the following function definition
var preVal     = 0.200;      // pre-disturbance value threshold - values below the provided threshold will exclude disturbance for those pixels - units are in units of segIndex defined in the following function definition
var mmu        = 1;       // minimum mapping unit for disturbance patches - units of pixels

var distParams = {
  tree_loss1: treeLoss1,
  tree_loss20: treeLoss20,  
  pre_val: preVal           
};
var distDir = 1;
var exportImg = extractDisturbance(ltArrImg.select('LandTrendr'), distDir, distParams).select(['yod']).clip(aoi).unmask(0).short();
Map.addLayer(exportImg.selfMask(),imageVisParam,'yod')

Export.image.toAsset({image:exportImg.toInt(),description:'gainYearFinaldiss'+name,assetId:folder+'/yoddiss'+name,'pyramidingPolicy': {".default": "mode"},crs: 'EPSG:4326',region:aoi,scale:30,maxPixels:1e13})
