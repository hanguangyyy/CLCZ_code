# CLCZ_code illustration

The Chinese LCZ long time series mapping code is displayed in the master branch (taking Hong Kong as an example), where except for the rule-based filtering step that rely on MATLAB, all other steps are based on Google Earth Engine (GEE), which are JavaScript files. The specific process is as follows (Figure 1 in our manuscript): cloud removal and synthesis of Landsat images from the past three years, principal component analysis (PCA), extraction of two texture features, normalization of texture features, Landtrend change detection, LCZ preliminary classification, filtering of preliminary classification results, and aggregation of filtered results. 

The preliminary classification of LCZ uses the results of extracting texture features as input features, and its samples need to be manually sampled and uploaded. In addition, except for steps that require years of consolidation (normalization, Landtrandr, filtering, result aggregation), the remaining steps only show examples from 2023.

The specific steps for implementation can also refer to another article from our team: https://doi.org/10.1016/j.uclim.2022.101391
