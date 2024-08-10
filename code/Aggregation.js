var geometry = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[114.17403113952541, 22.32401128014577],
         [114.02123719336348, 22.43146992327585]]);
var gub = ee.FeatureCollection('projects/globallcz/assets/gub/gub_code')
var hk = gub.filterBounds(geometry)

var yoddiss=ee.Image('users/chuangchun1/yodhk/yoddisshk')
var yodsavg=ee.Image('users/chuangchun1/yodhk/yodsavghk')

var roi=hk

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
var clud2000 = ee.Image('projects/chinalcz/assets/clud100/clud2000') // CLUD data
var clud2001 = ee.Image('projects/chinalcz/assets/clud100/clud2001')
var clud2002 = ee.Image('projects/chinalcz/assets/clud100/clud2002')
var clud2003 = ee.Image('projects/chinalcz/assets/clud100/clud2003')
var clud2004 = ee.Image('projects/chinalcz/assets/clud100/clud2004')
var clud2005 = ee.Image('projects/chinalcz/assets/clud100/clud2005')
var clud2006 = ee.Image('projects/chinalcz/assets/clud100/clud2006')
var clud2007 = ee.Image('projects/chinalcz/assets/clud100/clud2007')
var clud2008 = ee.Image('projects/chinalcz/assets/clud100/clud2008')
var clud2009 = ee.Image('projects/chinalcz/assets/clud100/clud2009')
var clud2010 = ee.Image('projects/chinalcz/assets/clud100/clud2010')
var clud2011 = ee.Image('projects/chinalcz/assets/clud100/clud2011')
var clud2012 = ee.Image('projects/chinalcz/assets/clud100/clud2012')
var clud2013 = ee.Image('projects/chinalcz/assets/clud100/clud2013')
var clud2014 = ee.Image('projects/chinalcz/assets/clud100/clud2014')
var clud2015 = ee.Image('projects/chinalcz/assets/clud100/clud2015')
var clud2016 = ee.Image('projects/chinalcz/assets/clud100/clud2016_v2')
var clud2017 = ee.Image('projects/chinalcz/assets/clud100/clud2017_v2')
var clud2018 = ee.Image('projects/chinalcz/assets/clud100/clud2018_v2')
var clud2019 = ee.Image('projects/chinalcz/assets/clud100/clud2019_v2')
var clud2020 = ee.Image('projects/chinalcz/assets/clud100/clud2020_v2')
var clud2021 = ee.Image('projects/chinalcz/assets/clud100/clud2021_v2')
var clud2022 = clud2021 // CLUD dataset only update to 2021
var clud2023 = clud2021

var map2000 = ee.Image('projects/ee-belly200023/assets/filterhk/map2000') //  Replace with the annual image after the filtering step (Upload locally to the filterhk folder)
var map2001 = ee.Image('projects/ee-belly200023/assets/filterhk/map2001')
var map2002 = ee.Image('projects/ee-belly200023/assets/filterhk/map2002')
var map2003 = ee.Image('projects/ee-belly200023/assets/filterhk/map2003')
var map2004 = ee.Image('projects/ee-belly200023/assets/filterhk/map2004')
var map2005 = ee.Image('projects/ee-belly200023/assets/filterhk/map2005')
var map2006 = ee.Image('projects/ee-belly200023/assets/filterhk/map2006')
var map2007 = ee.Image('projects/ee-belly200023/assets/filterhk/map2007')
var map2008 = ee.Image('projects/ee-belly200023/assets/filterhk/map2008')
var map2009 = ee.Image('projects/ee-belly200023/assets/filterhk/map2009')
var map2010 = ee.Image('projects/ee-belly200023/assets/filterhk/map2010')
var map2011 = ee.Image('projects/ee-belly200023/assets/filterhk/map2011')
var map2012 = ee.Image('projects/ee-belly200023/assets/filterhk/map2012')
var map2013 = ee.Image('projects/ee-belly200023/assets/filterhk/map2013')
var map2014 = ee.Image('projects/ee-belly200023/assets/filterhk/map2014')
var map2015 = ee.Image('projects/ee-belly200023/assets/filterhk/map2015')
var map2016 = ee.Image('projects/ee-belly200023/assets/filterhk/map2016')
var map2017 = ee.Image('projects/ee-belly200023/assets/filterhk/map2017')
var map2018 = ee.Image('projects/ee-belly200023/assets/filterhk/map2018')
var map2019 = ee.Image('projects/ee-belly200023/assets/filterhk/map2019')
var map2020 = ee.Image('projects/ee-belly200023/assets/filterhk/map2020')
var map2021 = ee.Image('projects/ee-belly200023/assets/filterhk/map2021')
var map2022 = ee.Image('projects/ee-belly200023/assets/filterhk/map2022')
var map2023 = ee.Image('projects/ee-belly200023/assets/filterhk/map2023')


var names = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010',
              '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023']
var yoddiss = yoddiss.reduceNeighborhood(ee.Reducer.mode(), ee.Kernel.square(30,'meters'),'kernel',false)
var yodsavg = yodsavg.reduceNeighborhood(ee.Reducer.mode(), ee.Kernel.square(30,'meters'),'kernel',false)
var yoddiss = ee.Image(0).where(yoddiss,yoddiss)
var yodsavg = ee.Image(0).where(yodsavg,yodsavg)
print(yodsavg)
var yod100 = yodsavg.where(yodsavg.eq(0).and(yoddiss.gt(0)),yoddiss)

// calculate yod close
var yoddiss = yoddiss.clip(roi).selfMask()
var kernel = ee.Kernel.circle({radius: 1});
var yoddiss_close = yoddiss.focalMax({kernel: kernel, iterations: 2})
var yoddiss_close = yoddiss_close.setDefaultProjection({crs: 'EPSG:3857'}).reduceResolution({reducer: ee.Reducer.mode(),bestEffort:true}).reproject({crs: 'EPSG:3857', scale: 100})
//Export.image.toAsset({image:yoddiss_close,description:'yoddiss_close',assetId:'projects/hkdata/assets/yod/yoddisshkclose','pyramidingPolicy': {".default": "mode"},crs: 'EPSG:3857',region:roi,scale:100,maxPixels:1e13})
Map.addLayer(yoddiss_close,{},'diss')

var yodsavg = yodsavg.clip(roi).selfMask()
var kernel = ee.Kernel.circle({radius: 1});
var yodsavg_close = yodsavg.focalMax({kernel: kernel, iterations: 2})
var yodsavg_close = yodsavg_close.setDefaultProjection({crs: 'EPSG:3857'}).reduceResolution({reducer: ee.Reducer.mode(),bestEffort:true}).reproject({crs: 'EPSG:3857', scale: 100})

Map.addLayer(yodsavg_close,{},'savg')



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

var lcz2023 = map2023
var change2022 = yod100.gte(2022)
var change2021 = yod100.gte(2021)
var change2020 = yod100.gte(2020)
var change2019 = yod100.gte(2019)
var change2018 = yod100.gte(2018)
var change2017 = yod100.gte(2017)
var change2016 = yod100.gte(2016)
var change2015 = yod100.gte(2015)
var change2014 = yod100.gte(2014)
var change2013 = yod100.gte(2013)
var change2012 = yod100.gte(2012)
var change2011 = yod100.gte(2011)
var change2010 = yod100.gte(2010)
var change2009 = yod100.gte(2009)
var change2008 = yod100.gte(2008)
var change2007 = yod100.gte(2007)
var change2006 = yod100.gte(2006)
var change2005 = yod100.gte(2005)
var change2004 = yod100.gte(2004)
var change2003 = yod100.gte(2003)
var change2002 = yod100.gte(2002)
var change2001 = yod100.gte(2001)
var change2000 = yod100.gte(2000)

var lcz2022 = lcz2022.where(change2022,map2022)
var lcz2021 = lcz2022.where(change2021,map2021)
var lcz2020 = lcz2021.where(change2020,map2020)
var lcz2019 = lcz2020.where(change2019,map2019)
var lcz2018 = lcz2019.where(change2018,map2018)
var lcz2017 = lcz2018.where(change2017,map2017)
var lcz2016 = lcz2017.where(change2016,map2016)
var lcz2015 = lcz2016.where(change2015,map2015)
var lcz2014 = lcz2015.where(change2014,map2014)
var lcz2013 = lcz2014.where(change2013,map2013)
var lcz2012 = lcz2013.where(change2012,map2012)
var lcz2011 = lcz2012.where(change2011,map2011)
var lcz2010 = lcz2011.where(change2010,map2010)
var lcz2009 = lcz2010.where(change2009,map2009)
var lcz2008 = lcz2009.where(change2008,map2008)
var lcz2007 = lcz2008.where(change2007,map2007)
var lcz2006 = lcz2007.where(change2006,map2006)
var lcz2005 = lcz2006.where(change2005,map2005)
var lcz2004 = lcz2005.where(change2004,map2004)
var lcz2003 = lcz2004.where(change2003,map2003)
var lcz2002 = lcz2003.where(change2002,map2002)
var lcz2001 = lcz2002.where(change2001,map2001)
var lcz2000 = lcz2001.where(change2000,map2000)

//##### Aggregation #####//
var crosswalk = function(img){
  var img = img.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(lcz2015)
  return img
}

//##### 2023 #####//
var base = map2023
var clud2023= clud2023.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2022)

// Supply CLUD-A with LC types  
var tree_scatter = map2022.eq(12)
var bare_rock = map2022.eq(15)

// Urban type by classification
var urban = clud2023.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2023 = clud2023.where(urban,base) 
var result2023 = result2023.where(bare_rock,map2023) 
var result2023 = result2023.where(tree_scatter,map2023)
var result2023 = result2023.where(urban,map2023)

//##### 2022 #####//
// Cross-walk

var clud2022 = clud2022.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2022)

// Supply CLUD-A with LC types
var tree_scatter = map2022.eq(12)
var bare_rock = map2022.eq(15)
// Urban type by classification
var urban = clud2022.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2022 = clud2022.where(urban,base)
var result2022 = result2022.where(bare_rock,map2022) 
var result2022 = result2022.where(tree_scatter,map2022)
var result2022 = result2022.where(urban,lcz2022)

//##### 2021 #####//
// Cross-walk

var clud2021 = clud2021.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2021)

// Supply CLUD-A with LC types
var tree_scatter = map2021.eq(12)
var bare_rock = map2021.eq(15)
// Urban type by classification
var urban = clud2021.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2021 = clud2021.where(urban,base)
var result2021 = result2021.where(bare_rock,map2021) 
var result2021 = result2021.where(tree_scatter,map2021)
var result2021 = result2021.where(urban,lcz2021)

//##### 2020 #####//
// Cross-walk

var clud2020 = clud2020.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2019)
Map.addLayer(clud2020,{},'2020')
// Supply CLUD-A with LC types
var tree_scatter = map2020.eq(12)
var bare_rock = map2020.eq(15)
// Urban type by classification
var urban = clud2020.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2020 = clud2020.where(urban,base)
var result2020 = result2020.where(bare_rock,map2020) 
var result2020 = result2020.where(tree_scatter,map2020)
var result2020 = result2020.where(urban,lcz2020)


//##### 2019 #####//
// Cross-walk
//Map.addLayer(clud2019,{},'2019')
var clud2019 = clud2019.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2019)
Map.addLayer(clud2019,{},'2019')
// Supply CLUD-A with LC types
var tree_scatter = map2019.eq(12)
var bare_rock = map2019.eq(15)
// Urban type by classification
var urban = clud2019.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2019 = clud2019.where(urban,base)
var result2019 = result2019.where(bare_rock,map2019) 
var result2019 = result2019.where(tree_scatter,map2019)
var result2019 = result2019.where(urban,lcz2019)



//##### 2018 #####//
// Cross-walk
var clud2018 = clud2018.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2018)

// Supply CLUD-A with LC types  
var tree_scatter = map2018.eq(12)
var bare_rock = map2018.eq(15)

// Urban type by classification
var urban = clud2018.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2018 = clud2018.where(urban,base) 
var result2018 = result2018.where(bare_rock,map2018) 
var result2018 = result2018.where(tree_scatter,map2018)
var result2018 = result2018.where(urban,lcz2018)


//##### 2017 #####//
// Cross-walk
var clud2017 = clud2017.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2017)

// Supply CLUD-A with LC types  
var tree_scatter = map2017.eq(12)
var bare_rock = map2017.eq(15)

// Urban type by classification
var urban = clud2017.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2017 = clud2017.where(urban,base) 
var result2017 = result2017.where(bare_rock,map2017) 
var result2017 = result2017.where(tree_scatter,map2017)
var result2017 = result2017.where(urban,lcz2017)

//##### 2016 #####//
// Cross-walk
var clud2016 = clud2016.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2016)
Map.addLayer(clud2016,{},'2016')
// Supply CLUD-A with LC types  
var tree_scatter = map2016.eq(12)
var bare_rock = map2016.eq(15)

// Urban type by classification
var urban = clud2016.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2016 = clud2016.where(urban,base) 
var result2016 = result2016.where(bare_rock,map2016) 
var result2016 = result2016.where(tree_scatter,map2016)
var result2016 = result2016.where(urban,lcz2016)


//##### 2015 #####//
// Cross-walk
Map.addLayer(clud2015,{},'20150')
var clud2015 = clud2015.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2015)
Map.addLayer(clud2015,{},'2015')
// Supply CLUD-A with LC types  
var tree_scatter = map2015.eq(12)
var bare_rock = map2015.eq(15)

// Urban type by classification
var urban = clud2015.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2015 = clud2015.where(urban,base) 
var result2015 = result2015.where(bare_rock,map2015) 
var result2015 = result2015.where(tree_scatter,map2015)
var result2015 = result2015.where(urban,lcz2015)


//##### 2014 #####//
// Cross-walk
var clud2014 = clud2014.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2014)

// Supply CLUD-A with LC types  
var tree_scatter = map2014.eq(12)
var bare_rock = map2014.eq(15)

// Urban type by classification
var urban = clud2014.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2014 = clud2014.where(urban,base) 
var result2014 = result2014.where(bare_rock,map2014) 
var result2014 = result2014.where(tree_scatter,map2014)
var result2014 = result2014.where(urban,lcz2014)


//##### 2013 #####//
// Cross-walk
var clud2013 = clud2013.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2013)

// Supply CLUD-A with LC types  
var tree_scatter = map2013.eq(12)
var bare_rock = map2013.eq(15)

// Urban type by classification
var urban = clud2013.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2013 = clud2013.where(urban,base) 
var result2013 = result2013.where(bare_rock,map2013) 
var result2013 = result2013.where(tree_scatter,map2013)
var result2013 = result2013.where(urban,lcz2013)


//##### 2012 #####//
// Cross-walk
var clud2012 = clud2012.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2012)

// Supply CLUD-A with LC types  
var tree_scatter = map2012.eq(12)
var bare_rock = map2012.eq(15)

// Urban type by classification
var urban = clud2012.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2012 = clud2012.where(urban,base) 
var result2012 = result2012.where(bare_rock,map2012) 
var result2012 = result2012.where(tree_scatter,map2012)
var result2012 = result2012.where(urban,lcz2012)


//##### 2011 #####//
// Cross-walk
var clud2011 = clud2011.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2011)

// Supply CLUD-A with LC types  
var tree_scatter = map2011.eq(12)
var bare_rock = map2011.eq(15)

// Urban type by classification
var urban = clud2011.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2011 = clud2011.where(urban,base) 
var result2011 = result2011.where(bare_rock,map2011) 
var result2011 = result2011.where(tree_scatter,map2011)
var result2011 = result2011.where(urban,lcz2011)


//##### 2010 #####//
// Cross-walk
var clud2010 = clud2010.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2010)

// Supply CLUD-A with LC types  
var tree_scatter = map2010.eq(12)
var bare_rock = map2010.eq(15)

// Urban type by classification
var urban = clud2010.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2010 = clud2010.where(urban,base) 
var result2010 = result2010.where(bare_rock,map2010) 
var result2010 = result2010.where(tree_scatter,map2010)
var result2010 = result2010.where(urban,lcz2010)


//##### 2009 #####//
// Cross-walk
var clud2009 = clud2009.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2009)

// Supply CLUD-A with LC types  
var tree_scatter = map2009.eq(12)
var bare_rock = map2009.eq(15)

// Urban type by classification
var urban = clud2009.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2009 = clud2009.where(urban,base) 
var result2009 = result2009.where(bare_rock,map2009) 
var result2009 = result2009.where(tree_scatter,map2009)
var result2009 = result2009.where(urban,lcz2009)


//##### 2008 #####//
// Cross-walk
var clud2008 = clud2008.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2008)

// Supply CLUD-A with LC types  
var tree_scatter = map2008.eq(12)
var bare_rock = map2008.eq(15)

// Urban type by classification
var urban = clud2008.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2008 = clud2008.where(urban,base) 
var result2008 = result2008.where(bare_rock,map2008) 
var result2008 = result2008.where(tree_scatter,map2008)
var result2008 = result2008.where(urban,lcz2008)


//##### 2007 #####//
// Cross-walk
var clud2007 = clud2007.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2007)

// Supply CLUD-A with LC types  
var tree_scatter = map2007.eq(12)
var bare_rock = map2007.eq(15)

// Urban type by classification
var urban = clud2007.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2007 = clud2007.where(urban,base) 
var result2007 = result2007.where(bare_rock,map2007) 
var result2007 = result2007.where(tree_scatter,map2007)
var result2007 = result2007.where(urban,lcz2007)


//##### 2006 #####//
// Cross-walk
var clud2006 = clud2006.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2006)

// Supply CLUD-A with LC types  
var tree_scatter = map2006.eq(12)
var bare_rock = map2006.eq(15)

// Urban type by classification
var urban = clud2006.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2006 = clud2006.where(urban,base) 
var result2006 = result2006.where(bare_rock,map2006) 
var result2006 = result2006.where(tree_scatter,map2006)
var result2006 = result2006.where(urban,lcz2006)


//##### 2005 #####//
// Cross-walk
var clud2005 = clud2005.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2005)

// Supply CLUD-A with LC types  
var tree_scatter = map2005.eq(12)
var bare_rock = map2005.eq(15)

// Urban type by classification
var urban = clud2005.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2005 = clud2005.where(urban,base) 
var result2005 = result2005.where(bare_rock,map2005) 
var result2005 = result2005.where(tree_scatter,map2005)
var result2005 = result2005.where(urban,lcz2005)


//##### 2004 #####//
// Cross-walk
var clud2004 = clud2004.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2004)

// Supply CLUD-A with LC types  
var tree_scatter = map2004.eq(12)
var bare_rock = map2004.eq(15)

// Urban type by classification
var urban = clud2004.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2004 = clud2004.where(urban,base) 
var result2004 = result2004.where(bare_rock,map2004) 
var result2004 = result2004.where(tree_scatter,map2004)
var result2004 = result2004.where(urban,lcz2004)


//##### 2003 #####//
// Cross-walk
var clud2003 = clud2003.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2003)

// Supply CLUD-A with LC types  
var tree_scatter = map2003.eq(12)
var bare_rock = map2003.eq(15)

// Urban type by classification
var urban = clud2003.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2003 = clud2003.where(urban,base) 
var result2003 = result2003.where(bare_rock,map2003) 
var result2003 = result2003.where(tree_scatter,map2003)
var result2003 = result2003.where(urban,lcz2003)


//##### 2002 #####//
// Cross-walk
var clud2002 = clud2002.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2002)

// Supply CLUD-A with LC types  
var tree_scatter = map2002.eq(12)
var bare_rock = map2002.eq(15)

// Urban type by classification
var urban = clud2002.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2002 = clud2002.where(urban,base) 
var result2002 = result2002.where(bare_rock,map2002) 
var result2002 = result2002.where(tree_scatter,map2002)
var result2002 = result2002.where(urban,lcz2002)


//##### 2001 #####//
// Cross-walk
var clud2001 = clud2001.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2001)

// Supply CLUD-A with LC types  
var tree_scatter = map2001.eq(12)
var bare_rock = map2001.eq(15)

// Urban type by classification
var urban = clud2001.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2001 = clud2001.where(urban,base) 
var result2001 = result2001.where(bare_rock,map2001) 
var result2001 = result2001.where(tree_scatter,map2001)
var result2001 = result2001.where(urban,lcz2001)


//##### 2000 #####//
// Cross-walk
var clud2000 = clud2000.remap([10,20,30,40,50,60,70,80,90,88,89,98],[14,11,14,13,18,17,14,0,16,0,0,0]).updateMask(map2000)

// Supply CLUD-A with LC types  
var tree_scatter = map2000.eq(12)
var bare_rock = map2000.eq(15)

// Urban type by classification
var urban = clud2000.eq(0)

// Aggregate specific LC types of classified LCZ to CLUD-A
var result2000 = clud2000.where(urban,base) 
var result2000 = result2000.where(bare_rock,map2000) 
var result2000 = result2000.where(tree_scatter,map2000)
var result2000 = result2000.where(urban,lcz2000)

// Fill the blanks in CLUD-A urban area





Map.addLayer(result2000.selfMask(), {min: 0, max: 18, palette: palette},'result2000');
Map.addLayer(result2005.selfMask(), {min: 0, max: 18, palette: palette},'result2005');
Map.addLayer(result2010.selfMask(), {min: 0, max: 18, palette: palette},'result2010');
Map.addLayer(result2018.selfMask(), {min: 0, max: 18, palette: palette},'result2018');
Map.addLayer(result2019.selfMask(), {min: 0, max: 18, palette: palette},'result2019');
Map.addLayer(result2020.selfMask(), {min: 0, max: 18, palette: palette},'result2020');
Map.addLayer(roi)
Export.image.toAsset({'image':result2023,'description':'result2023','assetId':'users/chuangchun1/resulthk/result2023','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2022,'description':'result2022','assetId':'users/chuangchun1/resulthk/result2022','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2021,'description':'result2021','assetId':'users/chuangchun1/resulthk/result2021','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2020,'description':'result2020','assetId':'users/chuangchun1/resulthk/result2020','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2019,'description':'result2019','assetId':'users/chuangchun1/resulthk/result2019','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2018,'description':'result2018','assetId':'users/chuangchun1/resulthk/result2018','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2017,'description':'result2017','assetId':'users/chuangchun1/resulthk/result2017','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2016,'description':'result2016','assetId':'users/chuangchun1/resulthk/result2016','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2015,'description':'result2015','assetId':'users/chuangchun1/resulthk/result2015','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2014,'description':'result2014','assetId':'users/chuangchun1/resulthk/result2014','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2013,'description':'result2013','assetId':'users/chuangchun1/resulthk/result2013','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2012,'description':'result2012','assetId':'users/chuangchun1/resulthk/result2012','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2011,'description':'result2011','assetId':'users/chuangchun1/resulthk/result2011','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2010,'description':'result2010','assetId':'users/chuangchun1/resulthk/result2010','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2009,'description':'result2009','assetId':'users/chuangchun1/resulthk/result2009','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2008,'description':'result2008','assetId':'users/chuangchun1/resulthk/result2008','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2007,'description':'result2007','assetId':'users/chuangchun1/resulthk/result2007','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2006,'description':'result2006','assetId':'users/chuangchun1/resulthk/result2006','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2005,'description':'result2005','assetId':'users/chuangchun1/resulthk/result2005','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2004,'description':'result2004','assetId':'users/chuangchun1/resulthk/result2004','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2003,'description':'result2003','assetId':'users/chuangchun1/resulthk/result2003','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2002,'description':'result2002','assetId':'users/chuangchun1/resulthk/result2002','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2001,'description':'result2001','assetId':'users/chuangchun1/resulthk/result2001','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})
Export.image.toAsset({'image':result2000,'description':'result2000','assetId':'users/chuangchun1/resulthk/result2000','pyramidingPolicy': {".default": "mode"} ,'scale':100,'region':roi,'maxPixels':1e13})

