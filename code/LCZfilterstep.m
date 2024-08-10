%% read data
path = 'D:\xuexi\LCZ\drive\region\Google Earth Engine Outputhk\';
[image,R1] = geotiffread(strcat(path,'LCZ_hk.tif')); %% Replace with an image synthesized by LCZ over the years
[i,R] = geotiffread(strcat(path,'2023LCZ_hk.tif'));
[i,R] = geotiffread(strcat(path,'2000LCZ_hk.tif'));
image2000 = image(:,:,1);
image2001 = image(:,:,2);
image2002 = image(:,:,3);
image2003 = image(:,:,4);
image2004 = image(:,:,5);
image2005 = image(:,:,6);
image2006 = image(:,:,7);
image2007 = image(:,:,8);
image2008 = image(:,:,9);
image2009 = image(:,:,10);
image2010 = image(:,:,11);
image2011 = image(:,:,12);
image2012 = image(:,:,13);
image2013 = image(:,:,14);
image2014 = image(:,:,15);
image2015 = image(:,:,16);
image2016 = image(:,:,17);
image2017 = image(:,:,18);
image2018 = image(:,:,19);
image2019 = image(:,:,20);
image2020 = image(:,:,21);
image2021 = image(:,:,22);
image2022 = image(:,:,23);
image2023 = image(:,:,24);

proj=geotiffinfo(strcat(path,'2000LCZ_hk.tif'));
%% reshape data
rownum = size(image2023,1);
colnum = size(image2023,2);
length = rownum*colnum;
data2023 = uint8(reshape(image2023,[rownum*colnum,1]));
data2022 = uint8(reshape(image2022,[rownum*colnum,1]));
data2021 = uint8(reshape(image2021,[rownum*colnum,1]));
data2020 = uint8(reshape(image2020,[rownum*colnum,1]));
data2019 = uint8(reshape(image2019,[rownum*colnum,1]));
data2018 = uint8(reshape(image2018,[rownum*colnum,1]));
data2017 = uint8(reshape(image2017,[rownum*colnum,1]));
data2016 = uint8(reshape(image2016,[rownum*colnum,1]));
data2015 = uint8(reshape(image2015,[rownum*colnum,1]));
data2014 = uint8(reshape(image2014,[rownum*colnum,1]));
data2013 = uint8(reshape(image2013,[rownum*colnum,1]));
data2012 = uint8(reshape(image2012,[rownum*colnum,1]));
data2011 = uint8(reshape(image2011,[rownum*colnum,1]));
data2010 = uint8(reshape(image2010,[rownum*colnum,1]));
data2009 = uint8(reshape(image2009,[rownum*colnum,1]));
data2008 = uint8(reshape(image2008,[rownum*colnum,1]));
data2007 = uint8(reshape(image2007,[rownum*colnum,1]));
data2006 = uint8(reshape(image2006,[rownum*colnum,1]));
data2005 = uint8(reshape(image2005,[rownum*colnum,1]));
data2004 = uint8(reshape(image2004,[rownum*colnum,1]));
data2003 = uint8(reshape(image2003,[rownum*colnum,1]));
data2002 = uint8(reshape(image2002,[rownum*colnum,1]));
data2001 = uint8(reshape(image2001,[rownum*colnum,1]));
data2000 = uint8(reshape(image2000,[rownum*colnum,1]));

%% data cube
SamplesRefTotal = zeros(length,24);
SamplesRefTotal(:,1) = data2023;
SamplesRefTotal(:,2) = data2022;
SamplesRefTotal(:,3) = data2021;
SamplesRefTotal(:,4) = data2020;
SamplesRefTotal(:,5) = data2019;
SamplesRefTotal(:,6) = data2018;
SamplesRefTotal(:,7) = data2017;
SamplesRefTotal(:,8) = data2016;
SamplesRefTotal(:,9) = data2015;
SamplesRefTotal(:,10) = data2014;
SamplesRefTotal(:,11) = data2013;
SamplesRefTotal(:,12) = data2012;
SamplesRefTotal(:,13) = data2011;
SamplesRefTotal(:,14) = data2010;
SamplesRefTotal(:,15) = data2009;
SamplesRefTotal(:,16) = data2008;
SamplesRefTotal(:,17) = data2007;
SamplesRefTotal(:,18) = data2006;
SamplesRefTotal(:,19) = data2005;
SamplesRefTotal(:,20) = data2004;
SamplesRefTotal(:,21) = data2003;
SamplesRefTotal(:,22) = data2002;
SamplesRefTotal(:,23) = data2001;
SamplesRefTotal(:,24) = data2000;
%SamplesRefTotal = xlsread('E:\z\BJLCZ\BJLCZ00_20.xlsx','BJLCZ00_20');
SamplesRefTotal = uint8(SamplesRefTotal);
data = uint8(SamplesRefTotal(:,1:24));
%clear image2000 image2001 image2002 image2003 
years = size(data,2);
%% filter change
% for i = 1:size(data,1)
%     for j = 2:20
%         year = j;
%         if SamplesRefTotal(i,j+1) == SamplesRefTotal(i,j-1)
%             SamplesRefTotal(i,j) = SamplesRefTotal(i,j-1);
%         end
%     end
% end
for i = 1:size(data,1)
    for j = 2:24
        year = j;
        switch SamplesRefTotal(i,j-1)
            case 1
                if ismember(SamplesRefTotal(i,j),[1 2 3 4 5 6 7 8 9 10 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=1;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 2
                if ismember(SamplesRefTotal(i,j),[2 3 5 6 7 8 9 10 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=2;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 3
                if ismember(SamplesRefTotal(i,j),[3 6 7 8 9 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=3;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 4
                if ismember(SamplesRefTotal(i,j),[2 3 4 5 6 7 8 9 10 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=4;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 5
                if ismember(SamplesRefTotal(i,j),[3 5 6 7 8 9 10 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=5;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 6
                if ismember(SamplesRefTotal(i,j),[6 7 8 9 10 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=6;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 7
                if ismember(SamplesRefTotal(i,j),[7 9 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=7;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 8
                if ismember(SamplesRefTotal(i,j),[7 8 9 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=8;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 9
                if ismember(SamplesRefTotal(i,j),[9 10 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=9;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 10
                if ismember(SamplesRefTotal(i,j),[9 10 13 14 15 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=10;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 11
                if ismember(SamplesRefTotal(i,j),[11 12 14 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=11;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 12
                if ismember(SamplesRefTotal(i,j),[11 12 14 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=12;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 13
                if ismember(SamplesRefTotal(i,j),[13 14 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=13;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 14
                if ismember(SamplesRefTotal(i,j),[11 12 13 14 16 18])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=14;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 15
                if ismember(SamplesRefTotal(i,j),[11 12 13 14 15 16 18])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=15;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 16
                if ismember(SamplesRefTotal(i,j),[11 12 13 14 16])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=16;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 17
                if ismember(SamplesRefTotal(i,j),17)
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,year)
                else
                    SamplesRefTotal(i,j)=17;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,year)
                end
            case 18
                if ismember(SamplesRefTotal(i,j),[17 18])
                    fprintf('number %d out of %d ,year %d out of %d right\n',i,size(data,1),j,4)
                else
                    SamplesRefTotal(i,j)=18;
                    fprintf('number %d out of %d ,year %d out of %d corrected\n',i,size(data,1),j,4)
                end
        end
    end
end

line2022 = SamplesRefTotal(:,1);
line2021 = SamplesRefTotal(:,2);
line2020 = SamplesRefTotal(:,3);
line2019 = SamplesRefTotal(:,4);
line2018 = SamplesRefTotal(:,5);
line2017 = SamplesRefTotal(:,6);
line2016 = SamplesRefTotal(:,7);
line2015 = SamplesRefTotal(:,8);
line2014 = SamplesRefTotal(:,9);
line2013 = SamplesRefTotal(:,10);
line2012 = SamplesRefTotal(:,11);
line2011 = SamplesRefTotal(:,12);
line2010 = SamplesRefTotal(:,13);
line2009 = SamplesRefTotal(:,14);
line2008 = SamplesRefTotal(:,15);
line2007 = SamplesRefTotal(:,16);
line2006 = SamplesRefTotal(:,17);
line2005 = SamplesRefTotal(:,18);
line2004 = SamplesRefTotal(:,19);
line2003 = SamplesRefTotal(:,20);
line2002 = SamplesRefTotal(:,21);
line2001 = SamplesRefTotal(:,22);
line2000 = SamplesRefTotal(:,23);

map2022 = uint8(reshape(line2022,[rownum,colnum]));
map2021 = uint8(reshape(line2021,[rownum,colnum]));
map2020 = uint8(reshape(line2020,[rownum,colnum]));
map2019 = uint8(reshape(line2019,[rownum,colnum]));
map2018 = uint8(reshape(line2018,[rownum,colnum]));
map2017 = uint8(reshape(line2017,[rownum,colnum]));
map2016 = uint8(reshape(line2016,[rownum,colnum]));
map2015 = uint8(reshape(line2015,[rownum,colnum]));
map2014 = uint8(reshape(line2014,[rownum,colnum]));
map2013 = uint8(reshape(line2013,[rownum,colnum]));
map2012 = uint8(reshape(line2012,[rownum,colnum]));
map2011 = uint8(reshape(line2011,[rownum,colnum]));
map2010 = uint8(reshape(line2010,[rownum,colnum]));
map2009 = uint8(reshape(line2009,[rownum,colnum]));
map2008 = uint8(reshape(line2008,[rownum,colnum]));
map2007 = uint8(reshape(line2007,[rownum,colnum]));
map2006 = uint8(reshape(line2006,[rownum,colnum]));
map2005 = uint8(reshape(line2005,[rownum,colnum]));
map2004 = uint8(reshape(line2004,[rownum,colnum]));
map2003 = uint8(reshape(line2003,[rownum,colnum]));
map2002 = uint8(reshape(line2002,[rownum,colnum]));
map2001 = uint8(reshape(line2001,[rownum,colnum]));
map2000 = uint8(reshape(line2000,[rownum,colnum]));

outpath = 'D:\xuexi\LCZ\drive\region\Google Earth Engine Outputhk\after\';
geotiffwrite(strcat(outpath,'map2022','.tif'),uint8(map2021),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2021','.tif'),uint8(map2021),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2020','.tif'),uint8(map2020),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2019','.tif'),uint8(map2019),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2018','.tif'),uint8(map2018),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2017','.tif'),uint8(map2017),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2016','.tif'),uint8(map2016),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2015','.tif'),uint8(map2015),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2014','.tif'),uint8(map2014),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2013','.tif'),uint8(map2013),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2012','.tif'),uint8(map2012),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2011','.tif'),uint8(map2011),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2010','.tif'),uint8(map2010),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2009','.tif'),uint8(map2009),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2008','.tif'),uint8(map2008),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2007','.tif'),uint8(map2007),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2006','.tif'),uint8(map2006),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2005','.tif'),uint8(map2005),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2004','.tif'),uint8(map2004),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2003','.tif'),uint8(map2003),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2002','.tif'),uint8(map2002),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2001','.tif'),uint8(map2001),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);
geotiffwrite(strcat(outpath,'map2000','.tif'),uint8(map2000),R, 'GeoKeyDirectoryTag', proj.GeoTIFFTags.GeoKeyDirectoryTag);


