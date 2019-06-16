// Plotly.d3.csv("grouped_years.csv", function(err, rows) {
    function unpack(rows, key) {
        console.log(typeof(rows))
        return rows.map(function(row) { return row[key]; });
    }
    
    // d3.json("/na_sales", function(err, rows) {
    d3.json("/guns_vg").then(function(response){


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Sales In North America',
        x: unpack(response, 'Year'),
        y: unpack(response, 'NA_Sales'),
        line: { color: '#17BECF' }
    };

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Violent Incidents',
        x: unpack(response, 'Year'),
        y: unpack(response, 'violent_incidents'),
        line: { color: '#7F7F7F' }
    }

    var data = [trace1, trace2];

    var layout = {
        title: 'Total VG Sales vs Total Violent Incidents',
    };

    Plotly.plot('MOAC', data, layout);
 })