// Create a map object
var myMap = L.map("map", {
    // Center map on Cleveland, OH 
    center: [41.4993, -81.6944],
    zoom: 6
    // layers: [streetmap, heatmap, satellite]
  });
  
  // Define variable for streetmap tile layer
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Define a markerSize function that will give each city a different radius based on incident fatalities 
  function markerSize(injuries) {
    return injuries * 550;
  }
  
  // Each mass shooting incident contains the date, state, site, fatalities and injuries  
  var mass_shootings = [{
    date: "10/1/17",
    location: [36.1699, -115.1398],
    state: "Nevada",
    site: "Las Vegas",
    fatalities: 59,
    injuries: 441
  },
  {
    date: "6/12/16",
    location: [28.5195, -81.3767],
    state: "Florida",
    site: "Orlando",
    fatalities: 50,
    injuries: 53
  },
  {
    date: "11/5/17",
    location: [29.2733, -98.0564],
    state: "Texas",
    site: "Sutherland Springs",
    fatalities: 27,
    injuries: 20
  },
  {
    date: "2/14/18",
    location: [26.3045, -80.2694],
    state: "Florida",
    site: "Pompano Beach (Parkland)",
    fatalities: 17,
    injuries: 17
  },
  {
    date: "12/2/15", 
    location: [34.0758, -117.277],
    state: "California",
    site: "San Bernadino",
    fatalities: 16,
    injuries: 19
  },
  {
    date: "9/16/13", 
    location: [38.873, -76.9977],
    state: "District of Columbia",
    site: "Washington Navy Yard",
    fatalities: 11,
    injuries: 3
  }, 
  {
      date: "5/17/15",
      location: [31.5039, -97.129],
      state: "Texas",
      site: "Waco",
      fatalities: 0, 
      injuries: 25
  },
  {
      date: "7/1/17",
      location: [34.7434, -92.2727],
      state: "Arkansas",
      site: "Little Rock",
      fatalities: 0, 
      injuries: 25
  },
  {
      date: "7/25/16",
      location: [26.612, -81.86],
      state: "Florida",
      site: "Fort Myers",
      fatalities: 2, 
      injuries: 19
  },
  {
      date: "4/2/14",
      location: [31.133, -97.7944],
      state: "Texas",
      site: "Fort Hood",
      fatalities: 4, 
      injuries: 16
  },
  {
      date: "5/12/13",
      location: [29.9861, -90.0595],
      state: "Louisiana",
      site: "New Orleans",
      fatalities: 0,
      injuries: 19
  },
  {
      date: "10/1/15",
      location: [43.2628, -123.28],
      state: "Oregon",
      site: "Roseburg",
      fatalities: 10, 
      injuries: 9
  },
  {
      date: "11/9/13",
      location: [29.884, -95.7187],
      state: "Texas",
      site: "Cypress",
      fatalities: 2, 
      injuries: 16
  },
{
    date: "2/25/16",
    location: [38.1368, -97.4268],
    state: "Kansas",
    site: "Hesston",
    fatalities: 4, 
    injuries: 14
},
{
    date: "11/14/17",
    location: [40.0187, -122.393],
    state: "California",
    site: "Corning",
    fatalities: 6, 
    injuries: 12
},
{
    date: "11/22/15",
    location: [29.9748, -90.0372],
    state: "Louisiana",
    site: "New Orleans",
    fatalities: 0, 
    injuries: 17
},
{
    date: "3/26/17",
    location: [39.0943, -84, 4286],
    state: "Ohio",
    site: "Cincinnati",
    fatalities: 2, 
    injuries: 15
},
{
    date: "1/23/18",
    location: [36.9152, -88.3367],
    state: "Kentucky",
    site: "Benton",
    fatalities: 2, 
    injuries: 14
},
{
    date: "9/28/14",
    location: [25.8341, -80.2086],
    state: "Florida",
    site: "Miami",
    fatalities: 0, 
    injuries: 15
},
{
    date: "7/16/16",
    location: [35.3481, -119.036],
    state: "California",
    site: "Bakersfield",
    fatalities: 1,
    injuries: 14
},
{
    date: "10/15/16",
    location: [34.0274, -118.351],
    state: "California",
    site: "Los Angeles",
    fatalities: 4,
    injuries: 11
},
{
    date: "7/7/16",
    location: [32.7793, -96.8052],
    state: "Texas",
    site: "Dallas",
    fatalities: 5, 
    injuries: 9
},
{
    date: "3/11/13",
    location: [38.9062, -77.0099],
    state: "District of Columbia",
    site: "Washington",
    fatalities: 0, 
    injuries: 13
},
{
    date: "8/21/16",
    location: [41.1981, -73.1753],
    state: "Connecticut",
    site: "Bridgeport",
    fatalities: 0, 
    injuries: 13
},
{
    date: "10/5/13",
    location: [36.7054, -119.76],
    state: "California",
    site: "Fresno",
    fatalities: 1, 
    injuries: 12
},
{
  date: "5/12/13",
  location: [29.9861, -90.0595],
  state: "Louisiana",
  site: "New Orleans",
  fatalities: 0, 
  injuries: 19
},
{
  date: "9/19/13",
  location: [41.803, -87.6699],
  state: "Illinois",
  site: "Chicago",
  fatalities: 0, 
  injuries: 12
},
{
  date: "2/20/14",
  location: [27.7753, -82.6384],
  state: "Florida",
  site: "Saint Petersburg",
  fatalities: 0, 
  injuries: 12
},
{
  date: "5/23/14",
  location: [34.4144, -119.857],
  state: "California", 
  site: "Goleta (Isla Vista)",
  fatalities: 4, 
  injuries: 8
},
{
  date: "6/20/15",
  location: [42.3797, -83.1241],
  state: "Michigan",
  site: "Detroit",
  fatalities: 1, 
  injuries: 11
},
{
  date: "7/23/15",
  location: [30.202, -92.0459],
  state: "Louisiana",
  site: "Lafayette",
  fatalities: 3, 
  injuries: 9
},
{
  date: "8/8/15",
  location: [35.9194, -89.8967],
  state: "Arkansas",
  site: "Blytheville",
  fatalities: 1, 
  injuries: 11
},
{
  date: "11/27/15",
  location: [38.8767, -104.847],
  state: "Colorado",
  site: "Colorado Springs",
  fatalities: 3, 
  injuries: 9
},
{
  date: "2/7/16",
  location: [28.4541, -81.4646],
  state: "Florida", 
  site: "Orlando",
  fatalities: 2, 
  injuries: 10
},
{
  date: "5/28/17",
  location: [32.4359, -84.9952],
  state: "Alabama", 
  site: "Phenix City",
  fatalities: 0, 
  injuries: 12
},
{
  date: "8/31/17",
  location: [41.7755, -87.6801],
  state: "Illinois",
  site: "Chicago (Englewood)",
  fatalities: 2, 
  injuries: 10
},
{
  date: "6/20/15",
  location: [39.9692, -75.2059],
  state: "Pennsylvania",
  site: "Philadelphia",
  fatalities: 0, 
  injuries: 11
},
{
  date: "9/4/16",
  location: [37.2838, -79.9227],
  state: "Virginia",
  site: "Roanoke",
  fatalities: 1, 
  injuries: 10
},
{
  date: "1/6/17",
  location: [26.0698, -80.1367],
  state: "Florida",
  site: "Fort Lauderdale",
  fatalities: 5, 
  injuries: 6
},
{
  date: "11/7/13",
  location: [42.4334, -83.0523],
  state: "Michigan",
  site: "Detroit",
  fatalities: 3, 
  injuries: 7
},
{
  date: "6/29/14",
  location: [29.9586, -90.0655],
  state: "Louisiana",
  site: "New Orleans",
  fatalities: 1, 
  injuries: 9
},
{
  date: "9/27/15",
  location: [33.0312, -84.7298],
  state: "Georgia",
  site: "Greenville",
  fatalities: 0, 
  injuries: 10
},
{
  date: "11/27/16",
  location: [29.9542, -90.0692],
  state: "Louisiana",
  site: "New Orleans",
  fatalities: 1, 
  injuries: 9
},
{
  date: "5/7/17",
  location: [41.8102, -87.6356],
  state: "Illinois",
  site: "Chicago",
  fatalities: 2, 
  injuries: 8
},
{
  date: "5/20/17",
  location: [39.9934, -75.1628],
  state: "Pennsylvania",
  site: "Philadelphia",
  fatalities: 0, 
  injuries: 10
},
{
  date: "9/10/17",
  location: [33.056, -96.7261],
  state: "Texas",
  site: "Plano",
  fatalities: 9, 
  injuries: 1
},
{
  date: "6/23/13",
  location: [39.0891, -94.5518],
  state: "Missouri",
  site: "Kansas City",
  fatalities: 1, 
  injuries: 8
},
{
  date: "6/30/13",
  location: [40.6452, -73.928],
  state: "New York",
  site: "Brooklyn",
  fatalities: 0, 
  injuries: 9
},
{
  date: "6/24/14",
  location: [25.8343, -80.2167],
  state: "Florida",
  site: "Miami",
  fatalities: 2, 
  injuries: 7
},
{
  date: "8/9/14",
  location: [44.9827, -93.2757],
  state: "Minnesota",
  site: "Minneapolis",
  fatalities: 1, 
  injuries: 8
},
{
  date: "12/21/14",
  location: [41.6181, -87.5532],
  state: "Illinois",
  site: "Calumet City",
  fatalities: 1, 
  injuries: 8
}
];

  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < mass_shootings.length; i++) {
    L.circle(mass_shootings[i].location, {
      fillOpacity: 0.75,
      color: "red",
      fillColor: "red",
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size proportionate to its population
      radius: markerSize(mass_shootings[i].injuries)
    }).bindPopup("<h1>" + mass_shootings[i].state + ", " + mass_shootings[i].site + "</h1> <hr> <h3>Date: " + 
      mass_shootings[i].date + "</h3> <hr> <h2>Fatalities: " + mass_shootings[i].fatalities + "</h2> <hr> <h2>Injuries: "
      + mass_shootings[i].injuries + "</h2>").addTo(myMap);
  }