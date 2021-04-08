Lab 6
Census Differences between Latino Communities over the time.
Laura Torres (ltorres2@umbc.edu)

2021/04/02

# Census Demo
This file will have the codes, data and files to use in the creation of the shape file that is going to be use on the lab page on GitHub that would be the result of this 6th lab.
# Setup
First, we load in the various packages we need. I’ve added mapview here instead of ggplot because it allows for easier interactions with sf. This chunk of code also sets some defaults for the tidycensus package. To use this script, you’ll need to sign up for your own census api key. (https://api.census.gov/data/key_signup.html)
# Library Packages to use: ‘tidyverse’ ‘tidycensus’ ‘sf’ and ‘ggplot2’.
library(tidyverse)
## ── Attaching packages ─────────────────────────────────────── tidyverse 1.3.0 ──
## ✓ ggplot2 3.3.3     ✓ purrr   0.3.4
## ✓ tibble  3.0.6     ✓ dplyr   1.0.4
## ✓ tidyr   1.1.2     ✓ stringr 1.4.0
## ✓ readr   1.4.0     ✓ forcats 0.5.1
## ── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
## x dplyr::filter() masks stats::filter()
## x dplyr::lag()    masks stats::lag()
library(tidycensus)
library(sf)
## Linking to GEOS 3.9.1, GDAL 3.2.1, PROJ 7.2.1
library(ggplot2)
# The following chunk is for the settings for tidycensus, once you upload your census_api_key you do not have to upload it again. Try to keep your census_api_key save and secret.
To reuse the census_api_key you must re-install the census_api_key by using the ‘tidycensus::census_api_key(overwrite=TRUE , key = “YOUR_KEY_HERE”, install = T)’
options(tigris_class = "sf")
options(tigris_use_cache = TRUE)
census_api_key("YOUR_KEY_HERE", overwrite=TRUE)
## To install your API key for use in future sessions, run this function with `install = TRUE`.
tidycensus::census_api_key(overwrite=TRUE , key =  "YOUR_KEY_HERE", install = T)
## Your original .Renviron will be backed up and stored in your R HOME directory if needed.
## Your API key has been stored in your .Renviron and can be accessed by Sys.getenv("CENSUS_API_KEY"). 
## To use now, restart R or run `readRenviron("~/.Renviron")`
## [1] "411bca30ac7994bdfb472835149348fd742739fd"
# To re-start the program and allow the census_api_key to be installed, we use the readRenviron(“~/.Renviron”) comand.
readRenviron("~/.Renviron")
# Testing the tidycensus
I am using the following code just to test the tidycensus library and my key, the data selected in this test is not connected with the data to be use in the Lab 6
library(tidycensus)
v15_Profile <- load_variables(2017 , "acs5/profile", cache = TRUE) #demographic profile tables
v15_Profile[grep(x = v15_Profile$label, "Built 2000 to 2009"), c("name", "label")]
## # A tibble: 2 x 2
##   name       label                                                              
##   <chr>      <chr>                                                              
## 1 DP04_0019  Estimate!!YEAR STRUCTURE BUILT!!Total housing units!!Built 2000 to…
## 2 DP04_0019P Percent Estimate!!YEAR STRUCTURE BUILT!!Total housing units!!Built…
# To Create a working directory in the computer
I am using the following code to change the working directory in the computer
setwd("/Users/lauratorres/Documents/UMBC/687 Advanced GIS/capitulos/lab6")
## Getting the Census Data
I have to use the get_acs command to be able to get the data from the Census and specify what are the variables that I will be looking and the population.
The following link was provided by Dr. Dillon Here’s the Data Dictionary from Social Explorer. (https://www.socialexplorer.com/data/ACS2019_5yr/metadata/?ds=ACS19_5yr)
#the following codes are going to help me to get data from 2015-19 hispanic population living in Baltimore’s households
balt_hispanic_female_2019 <- get_acs(geography = "tract", 
     variables = c("total_pop" = "B03002_001", # Total population
                   "pop_hispltx" = "B03002_012", # population hispanic
                   "pop_natiandczip" = "B05003I_001", # population nationality and citizenship
                   "pop_natiandczipgender" = "B05003I_013", # population nationality and citizenship and gender
                  "pop_household" = "B11002I_002", # population household
                  "pop_femalehousehold" = "B11002I_009" # population female household
                   ), 
     year = 2019,
     survey = "acs5",
     state = c(24), 
     county = c(510,5), 
     geometry = TRUE, # download the shapefile with the data
     output = "wide") # need this
## Getting data from the 2015-2019 5-year ACS
#the following codes are going to help me to get data from 2010-14 hispanic population living in Baltimore’s households
balt_hispanic_female_2014 <- get_acs(geography = "tract", 
     variables = c("total_pop" = "B03002_001", # Total population
                   "pop_hispltx" = "B03002_012", # population hispanic
                   "pop_natiandczip" = "B05003I_001", # population nationality and citizenship
                   "pop_natiandczipgender" = "B05003I_013", # population nationality and citizenship and gender
                   "pop_household" = "B11002I_002", # population household
                   "pop_femalehousehold" = "B11002I_009" # population female household
                   ), 
     year = 2014,
     survey = "acs5",
     state = c(24), 
     county = c(510,5), 
     geometry = FALSE, # download the shapefile with the data
     output = "wide") # need this
## Getting data from the 2010-2014 5-year ACS
# After getting the data from the 2019 and 2014 Census I am going to save in geojson, and transform it to 3857
st_write(st_transform(balt_hispanic_female_2019, 3857), "balt_hispanic_female_2019.geojson")
## Writing layer `balt_hispanic_female_2019' to data source `balt_hispanic_female_2019.geojson' using driver `GeoJSON'
## Writing 414 features with 14 fields and geometry type Multi Polygon.
st_write(balt_hispanic_female_2014, "balt_hispanic_female_2014.csv",
          overwrite=TRUE, 
         append=FALSE) # geometry is false!
## Deleting layer `balt_hispanic_female_2014' using driver `CSV'
## Writing layer `balt_hispanic_female_2014' to data source `balt_hispanic_female_2014.csv' using driver `CSV'
## Updating existing layer balt_hispanic_female_2014
## Writing 414 features with 14 fields without geometries.
# Computting the Hispanic female population at the Household, and “Documentation” in Baltimore 2019
The following chunks are designed to allow us to connect the data variables as we desired.
With each variable we have to connect the Baltimore population variable with the variable to use as for example balt_hispanic_female_2019$pop_hispltx but as we have saved before the balt_hispanic_female_2019 shape file, we can see that in this shapefile the different variables have two columns one as pop_hispltxE and other as pop_hispltxM. For this occasion I will be using the M columns.
balt_hispanic_female_2019$baltilatif_share <- (balt_hispanic_female_2019$pop_hispltxM + balt_hispanic_female_2019$pop_natiandczipM + balt_hispanic_female_2019$pop_natiandczipgenderM + balt_hispanic_female_2019$pop_householdM) / balt_hispanic_female_2019$total_popM
# Computting the Hispanic female population at the Household, and “Documentation” in Baltimore 2014
The following chunks are designed to allow us to connect the data variables as we desired.
With each variable we have to connect the Baltimore population variable with the variable to use as for example balt_hispanic_female_2014$pop_hispltx but as we have saved before the balt_hispanic_female_2014 shape file, we can see that in this shapefile the different variables have two columns one as pop_hispltxE and other as pop_hispltxM. For this occasion I will be using the M columns.
balt_hispanic_female_2014$baltilatif_share <- (balt_hispanic_female_2014$pop_hispltxM + balt_hispanic_female_2014$pop_natiandczipM + balt_hispanic_female_2014$pop_natiandczipgenderM + balt_hispanic_female_2014$pop_householdM) / balt_hispanic_female_2014$total_popM
# Compute the Non Latin share in 2019, as the inverse of the Latin share computed above
balt_hispanic_female_2019$baltinonlatif_share <- 1 - balt_hispanic_female_2019$baltilatif_share
# Compute the Non Latin share in 2014, as the inverse of the Latin share computed above
balt_hispanic_female_2014$baltinonlatif_share <- 1 - balt_hispanic_female_2014$baltilatif_share
## Merge the two commuties
bmore_female<- left_join(balt_hispanic_female_2019, balt_hispanic_female_2014, 
                              by="GEOID",
                              suffix=c(".19",".14"))
##Compute differences the two commuties
bmore_female$balt_latinf_diff <- bmore_female$baltilatif_share.19 -
        bmore_female$baltilatif_share.14

bmore_female$balt_nonlatinf_diff <- bmore_female$baltilatif_share.19 -
        bmore_female$baltilatif_share.14
# Compute difference in the Baltimore female house hold
bmore_female$hhh_diff <- bmore_female$pop_femalehouseholdM.19 -
        bmore_female$pop_femalehouseholdM.14
#hhh hispanic house hold
bmore_female <- st_transform(bmore_female, 3857) # reproject into web-mercator because Google owns everything
##Write to file Here I’m going to use ggplot. Not that I specified the CRS (projection)

st_write(balt_hispanic_female_2019, "balt_hispanic_female_diff.geojson")
## Writing layer `balt_hispanic_female_diff' to data source `balt_hispanic_female_diff.geojson' using driver `GeoJSON'
## Writing 414 features with 16 fields and geometry type Multi Polygon.
