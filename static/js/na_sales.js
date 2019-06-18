// Authored by ‘Robert Rua’, ‘Jeremy Halek’, ‘Gaston Alvarado’, ‘Yevgeniy Khmelnitskiy’,  ‘Anthony Uhuegbue’
// Plotly.d3.csv("grouped_years.csv", function(err, rows) {
    function unpack(rows, key) {
        
        return rows.map(function(row) { return row[key]; });
    }
    
    // d3.json("/na_sales", function(err, rows) {
    d3.json("/na_sales").then(function(response){
            
        //  var response  = JSON.parse(response);
         
        
    
        var trace1 = {
            x: unpack(response, 'Year'),
            y: unpack(response, 'NA_Sales'),
            fill: 'tonexty',
            type: 'scatter'
    
        };
        
    
        var data = [trace1];
    
        var layout = {
            xaxis: {
                title: 'Year',
            },
            yaxis: {
                title: 'Sales in North America (M)'
            }
            //title: '1993-2018 Total VG Sales in North America'
    
        };
    
        Plotly.plot('r1', data, layout, { responsive: true });
    
        //Plotly.newPlot('myDiv', data, layout);
    
    })