# Project-2

A project exploring gun violence vs. video game sales and their ratings

#Team

Gaston Alvarado - Jeremy Halek - Yevgeniy Khmelnitskiy - Rob Rua - Anthony Uhuegbue

#Project Scope

Our goal for this project is to use Data Analytics to understand whether or not there are possible relationships between gun violence and sales of violent video games in the United States. We hypothesize that as sales and players of violent video games are increasing, so too is gun violence. 

#Data Sources

We used a dataset available from Kaggle https://www.kaggle.com/ashaheedq/video-games-sales-2019 that collected all the video game sales in major regions of the world from 1993 to 2018. This data is in a csv format.

We also used data coming from the Gun violence archive, that collected all the gun-related violent incidents in the US. This dataset has 2,500+ sources that are validated daily, and it is in a csv format.

#Data cleansing

We reviewed the data and selected the information that was more relevant for our analysis:

Guns: date, coordinates, number of victims, inident characteristics
Games: Year, NA sales (in millions), genre, and ESRB rating

#Assumptions

Guns: 
- 4 or more hooting victims in a single incident is considered mass shooting
- There is no data before 2012

Game:
- No ESRB ratings before 1994
- "M" rating and "Shooter" genre are considered violent
- Sales by state not available

#Technology

We use different techniques and libraries learned in the CWR Data Analytics bootcamp, like Flask, HTML, Bootstrap, and Javascript.



