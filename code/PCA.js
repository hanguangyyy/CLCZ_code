var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[114.17403113952541, 22.32401128014577],
         [114.02123719336348, 22.43146992327585]]);
var gub = ee.FeatureCollection('projects/globallcz/assets/gub/gub_code')
var hk=gub.filterBounds(geometry)

var bound = hk
var name = 'hk'
var folder = 'pchk'
var dur = '3years'

var bands8 = ['SR_B2','SR_B3','SR_B4','SR_B5','SR_B6','SR_B7']
var bands75 = ['SR_B1','SR_B2','SR_B3','SR_B4','SR_B5','SR_B7']



// 2023
// Map the function over one year of data.
// PCA & GLCM
var composite = ee.Image('projects/ee-belly200023/assets/hongkong/landsat_2024_3years') //Replace with the image from the cloud removal and three-year image compositing step
var bands = ['SR_B2','SR_B3','SR_B4','SR_B5','SR_B6','SR_B7']
var arrayImage = composite.select(bands8).toArray()

var covar = arrayImage.reduceRegion({
  reducer: ee.Reducer.covariance(),
  scale:30,
  geometry:bound,
  maxPixels:1e9
})

var covarArray = ee.Array(covar.get('array'))

var eigens = covarArray.eigen()
var eigenVectors = eigens.slice(1,1)

var principalComponents = ee.Image(eigenVectors).matrixMultiply(arrayImage.toArray(1));

var pcImage = principalComponents
// Throw out an unneeded dimension, [[]] -> [].
.arrayProject([0])
// Make the one band array image a multi-band image, [] -> image
.arrayFlatten([['pc1','pc2','pc3','pc4','pc5','pc6']])

//Map.addLayer(pcImage.select('pc1'),{},'PC')

var pc1 = pcImage.select('pc1')
var pc1 = pc1.multiply(1e8).toInt()
var pc1 = pc1.clip(bound)
Map.addLayer(pc1)
Export.image.toAsset({image:pc1,description:'pc12023'+name+dur,assetId:folder+'/pc1_2023_'+dur,'pyramidingPolicy': {".default": "mean"},crs: 'EPSG:4326',region:bound,scale:30,maxPixels:1e13})

