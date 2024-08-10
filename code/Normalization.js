var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[114.17403113952541, 22.32401128014577],
         [114.02123719336348, 22.43146992327585]]);
var gub = ee.FeatureCollection('projects/globallcz/assets/gub/gub_code')
var hk=gub.filterBounds(geometry)

var bound = hk
var name = 'hk3years_normal'
var folder = 'normalizedhk'

//##### Scale #####//
//var mask = gaia.gt(0)
function normalization(image,region,scale){
var mean_std = image.reduceRegion({
  reducer: ee.Reducer.mean()
            .combine(ee.Reducer.stdDev(),null, true),
  geometry: region,
  scale: scale,
  maxPixels: 1e13,
  // tileScale: 16
}); 

// use unit scale to normalize the pixel values
var unitScale = ee.ImageCollection.fromImages(
  image.bandNames().map(function(name){
    name = ee.String(name);
    var band = image.select(name);
    var mean=ee.Number(mean_std.get(name.cat('_mean')));
    var std=ee.Number(mean_std.get(name.cat('_stdDev')));
    var max=mean.add(std.multiply(3))
    var min=mean.subtract(std.multiply(3))
    var band1=ee.Image(min).multiply(band.lt(min)).add(ee.Image(max).multiply(band.gt(max)))
                        .add(band.multiply(ee.Image(1).subtract(band.lt(min)).subtract(band.gt(max))))
    var result_band=band1.subtract(min).divide(max.subtract(min));
    return result_band;
})).toBands().rename(image.bandNames());
  return unitScale;
}

//##### DISS #####//
var diss2000 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2000hk') // Replace with the annual diss image from the texture feature extraction step
var diss2001 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2001hk')
var diss2002 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2002hk')
var diss2003 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2003hk')
var diss2004 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2004hk')
var diss2005 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2005hk')
var diss2006 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2006hk')
var diss2007 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2007hk')
var diss2008 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2008hk')
var diss2009 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2009hk')
var diss2010 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2010hk')
var diss2011 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2011hk')
var diss2012 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2012hk')
var diss2013 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2013hk')
var diss2014 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2014hk')
var diss2015 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2015hk')
var diss2016 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2016hk')
var diss2017 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2017hk')
var diss2018 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2018hk')
var diss2019 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2019hk')
var diss2020 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2020hk')
var diss2022 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2022hk')
var diss2023 = ee.Image('projects/ee-belly200023/assets/featurehk/diss2023hk')
var diss = diss2023.addBands(diss2022).addBands(2021).addBands(diss2020).addBands(diss2019).addBands(diss2018).addBands(diss2017).addBands(diss2016).addBands(diss2015).addBands(diss2014).addBands(diss2013)
            .addBands(diss2012).addBands(diss2011).addBands(diss2010).addBands(diss2009).addBands(diss2008).addBands(diss2007)
            .addBands(diss2006).addBands(diss2005).addBands(diss2004).addBands(diss2003).addBands(diss2002).addBands(diss2001)
            .addBands(diss2000)
var normal_diss = normalization(diss,bound,30)
var normal_diss2023 = normal_diss.select('diss2023')
var normal_diss2022 = normal_diss.select('diss2022')
var normal_diss2021 = normal_diss.select('diss2021')
var normal_diss2020 = normal_diss.select('diss2020')
var normal_diss2019 = normal_diss.select('diss2019')
var normal_diss2018 = normal_diss.select('diss2018')
var normal_diss2017 = normal_diss.select('diss2017')
var normal_diss2016 = normal_diss.select('diss2016')
var normal_diss2015 = normal_diss.select('diss2015')
var normal_diss2014 = normal_diss.select('diss2014')
var normal_diss2013 = normal_diss.select('diss2013')
var normal_diss2012 = normal_diss.select('diss2012')
var normal_diss2011 = normal_diss.select('diss2011')
var normal_diss2010 = normal_diss.select('diss2010')
var normal_diss2009 = normal_diss.select('diss2009')
var normal_diss2008 = normal_diss.select('diss2008')
var normal_diss2007 = normal_diss.select('diss2007')
var normal_diss2006 = normal_diss.select('diss2006')
var normal_diss2005 = normal_diss.select('diss2005')
var normal_diss2004 = normal_diss.select('diss2004')
var normal_diss2003 = normal_diss.select('diss2003')
var normal_diss2002 = normal_diss.select('diss2002')
var normal_diss2001 = normal_diss.select('diss2001')
var normal_diss2000 = normal_diss.select('diss2000')


var name = 'hk3years_normal'
var folder = 'normalizedhk'
Export.image.toAsset({image:normal_diss2023.toFloat(),description:'normal_diss2023'+name,assetId:folder+'/diss2023'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2022.toFloat(),description:'normal_diss2022'+name,assetId:folder+'/diss2022'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2021.toFloat(),description:'normal_diss2021'+name,assetId:folder+'/diss2021'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2020.toFloat(),description:'normal_diss2020'+name,assetId:folder+'/diss2020'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2019.toFloat(),description:'normal_diss2019'+name,assetId:folder+'/diss2019'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2018.toFloat(),description:'normal_diss2018'+name,assetId:folder+'/diss2018'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2017.toFloat(),description:'normal_diss2017'+name,assetId:folder+'/diss2017'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2016.toFloat(),description:'normal_diss2016'+name,assetId:folder+'/diss2016'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2015.toFloat(),description:'normal_diss2015'+name,assetId:folder+'/diss2015'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2014.toFloat(),description:'normal_diss2014'+name,assetId:folder+'/diss2014'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2013.toFloat(),description:'normal_diss2013'+name,assetId:folder+'/diss2013'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2012.toFloat(),description:'normal_diss2012'+name,assetId:folder+'/diss2012'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2011.toFloat(),description:'normal_diss2011'+name,assetId:folder+'/diss2011'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2010.toFloat(),description:'normal_diss2010'+name,assetId:folder+'/diss2010'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2009.toFloat(),description:'normal_diss2009'+name,assetId:folder+'/diss2009'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2008.toFloat(),description:'normal_diss2008'+name,assetId:folder+'/diss2008'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2007.toFloat(),description:'normal_diss2007'+name,assetId:folder+'/diss2007'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2006.toFloat(),description:'normal_diss2006'+name,assetId:folder+'/diss2006'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2005.toFloat(),description:'normal_diss2005'+name,assetId:folder+'/diss2005'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2004.toFloat(),description:'normal_diss2004'+name,assetId:folder+'/diss2004'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2003.toFloat(),description:'normal_diss2003'+name,assetId:folder+'/diss2003'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2002.toFloat(),description:'normal_diss2002'+name,assetId:folder+'/diss2002'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2001.toFloat(),description:'normal_diss2001'+name,assetId:folder+'/diss2001'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_diss2000.toFloat(),description:'normal_diss2000'+name,assetId:folder+'/diss2000'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})

// SAVG
var savg2000 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2000hk') // Replace with the annual savg image from the texture feature extraction step
var savg2001 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2001hk')
var savg2002 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2002hk')
var savg2003 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2003hk')
var savg2004 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2004hk')
var savg2005 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2005hk')
var savg2006 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2006hk')
var savg2007 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2007hk')
var savg2008 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2008hk')
var savg2009 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2009hk')
var savg2010 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2010hk')
var savg2011 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2011hk')
var savg2012 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2012hk')
var savg2013 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2013hk')
var savg2014 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2014hk')
var savg2015 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2015hk')
var savg2016 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2016hk')
var savg2017 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2017hk')
var savg2018 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2018hk')
var savg2019 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2019hk')
var savg2020 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2020hk')
var savg2021 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2021hk')
var savg2022 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2022hk')
var savg2023 = ee.Image('projects/ee-belly200023/assets/featurehk/savg2023hk')


var savg = diss2023.addBands(diss2022).addBands(2021).addBands(diss2020).addBands(savg2019).addBands(savg2018).addBands(savg2017).addBands(savg2016).addBands(savg2015).addBands(savg2014).addBands(savg2013)
            .addBands(savg2012).addBands(savg2011).addBands(savg2010).addBands(savg2009).addBands(savg2008).addBands(savg2007)
            .addBands(savg2006).addBands(savg2005).addBands(savg2004).addBands(savg2003).addBands(savg2002).addBands(savg2001)
            .addBands(savg2000)


var normal_savg = normalization(savg,bound,30)

var normal_savg2023 = normal_savg.select('savg2023')
var normal_savg2022 = normal_savg.select('savg2022')
var normal_savg2021 = normal_savg.select('savg2021')
var normal_savg2020 = normal_savg.select('savg2020')
var normal_savg2019 = normal_savg.select('savg2019')
var normal_savg2018 = normal_savg.select('savg2018')
var normal_savg2017 = normal_savg.select('savg2017')
var normal_savg2016 = normal_savg.select('savg2016')
var normal_savg2015 = normal_savg.select('savg2015')
var normal_savg2014 = normal_savg.select('savg2014')
var normal_savg2013 = normal_savg.select('savg2013')
var normal_savg2012 = normal_savg.select('savg2012')
var normal_savg2011 = normal_savg.select('savg2011')
var normal_savg2010 = normal_savg.select('savg2010')
var normal_savg2009 = normal_savg.select('savg2009')
var normal_savg2008 = normal_savg.select('savg2008')
var normal_savg2007 = normal_savg.select('savg2007')
var normal_savg2006 = normal_savg.select('savg2006')
var normal_savg2005 = normal_savg.select('savg2005')
var normal_savg2004 = normal_savg.select('savg2004')
var normal_savg2003 = normal_savg.select('savg2003')
var normal_savg2002 = normal_savg.select('savg2002')
var normal_savg2001 = normal_savg.select('savg2001')
var normal_savg2000 = normal_savg.select('savg2000')

Export.image.toAsset({image:normal_savg2023.toFloat(),description:'normal_savg2023'+name,assetId:folder+'/savg2020'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2022.toFloat(),description:'normal_savg2022'+name,assetId:folder+'/savg2019'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2021.toFloat(),description:'normal_savg2021'+name,assetId:folder+'/savg2018'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2020.toFloat(),description:'normal_savg2020'+name,assetId:folder+'/savg2020'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2019.toFloat(),description:'normal_savg2019'+name,assetId:folder+'/savg2019'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2018.toFloat(),description:'normal_savg2018'+name,assetId:folder+'/savg2018'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2017.toFloat(),description:'normal_savg2017'+name,assetId:folder+'/savg2017'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2016.toFloat(),description:'normal_savg2016'+name,assetId:folder+'/savg2016'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2015.toFloat(),description:'normal_savg2015'+name,assetId:folder+'/savg2015'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2014.toFloat(),description:'normal_savg2014'+name,assetId:folder+'/savg2014'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2013.toFloat(),description:'normal_savg2013'+name,assetId:folder+'/savg2013'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2012.toFloat(),description:'normal_savg2012'+name,assetId:folder+'/savg2012'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2011.toFloat(),description:'normal_savg2011'+name,assetId:folder+'/savg2011'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2010.toFloat(),description:'normal_savg2010'+name,assetId:folder+'/savg2010'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2009.toFloat(),description:'normal_savg2009'+name,assetId:folder+'/savg2009'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2008.toFloat(),description:'normal_savg2008'+name,assetId:folder+'/savg2008'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2007.toFloat(),description:'normal_savg2007'+name,assetId:folder+'/savg2007'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2006.toFloat(),description:'normal_savg2006'+name,assetId:folder+'/savg2006'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2005.toFloat(),description:'normal_savg2005'+name,assetId:folder+'/savg2005'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2004.toFloat(),description:'normal_savg2004'+name,assetId:folder+'/savg2004'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2003.toFloat(),description:'normal_savg2003'+name,assetId:folder+'/savg2003'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2002.toFloat(),description:'normal_savg2002'+name,assetId:folder+'/savg2002'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2001.toFloat(),description:'normal_savg2001'+name,assetId:folder+'/savg2001'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:normal_savg2000.toFloat(),description:'normal_savg2000'+name,assetId:folder+'/savg2000'+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})

