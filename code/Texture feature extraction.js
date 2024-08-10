var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[114.17403113952541, 22.32401128014577],
         [114.02123719336348, 22.43146992327585]]);
var gub = ee.FeatureCollection('projects/globallcz/assets/gub/gub_code')
var hk=gub.filterBounds(geometry)

var bound = hk
var name = 'hk'
var folder = 'pchk'
var dur = '3years'

// 2023
var year = '2023'
var pc1 = ee.Image('projects/ee-belly200023/assets/pchk/pc1_'+year+'_3years') //Replace with the image from the PCA step

var glcm = pc1.glcmTexture()
var texture = glcm.select(['pc1_diss','pc1_savg'])

var savgname = 'savg'+year
var dissname = 'diss'+year

var savg = glcm.select('pc1_savg').rename(savgname)
var diss = glcm.select('pc1_diss').rename(dissname)
Map.addLayer(savg)
Map.addLayer(diss)
Export.image.toAsset({image:savg.toFloat(),description:'savg'+year+name,assetId:'featuregs/savg'+year+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})
Export.image.toAsset({image:diss.toFloat(),description:'diss'+year+name,assetId:'featuregs/diss'+year+name,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})

