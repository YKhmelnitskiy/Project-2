// Authored by ‘Robert Rua’, ‘Jeremy Halek’, ‘Gaston Alvarado’, ‘Yevgeniy Khmelnitskiy’,  ‘Anthony Uhuegbue’
function unpack(rows, key) {
    
    return rows.map(function(row) { return row[key]; });
}
d3.json("/esrb_sales").then(function(response){
            
    //  var response  = JSON.parse(response);
     

    var xValue = unpack(response, 'ESRB_Rating')
    var yValue = unpack(response, 'NA_Sales')

    var trace1 = {
        x: xValue,
        y: yValue,
        marker: {
            color: ['rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
        },
        name: 'Total Sales',
        type: 'bar',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
        }]
    };

    // var trace2 = {
    //     x: unpack(rows, 'ESRB_Rating'),
    //     y: unpack(rows, 'sales_pct'),
    //     name: 'Sales Percentage',
    //     type: 'bar'
    // };


    var data = [trace1];

    var layout = {
        xaxis: {
            type: 'category',
            title: 'ESRB Ratings',
        },
        yaxis: {
            title: 'Total Sales in North America (M)'
        }
        // title: 'Total Sales in NA 1993-2018 by ESRB Rating'
    };

    Plotly.plot('r2', data, layout, { responsive: true});

})