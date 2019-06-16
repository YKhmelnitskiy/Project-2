// var massdata = d3.json("/MassShootingData").then(function(response){
//     console.log (response);
//     }
// );

var chart = c3.generate({
    bindto: '#MassShootingschart',
    title: {
        text: 'Mass Shootings Chart'
      },
    data: {json: [{
            'year': '2013-01-01',
            'Killed': 288,
            'Injured': 961,
            'Mass_shootings': 253
            }, {
            'year': '2014-01-01',
            'Killed': 265,
            'Injured': 1083,
            'Mass_shootings': 270
            }, {
            'year': '2015-01-01',
            'Killed': 366,
            'Injured': 1324,
            'Mass_shootings': 332
            }, {
            'year': '2016-01-01',
            'Killed': 456,
            'Injured': 1527,
            'Mass_shootings': 282
            }, {
                'year': '2017-01-01',
                'Killed': 437,
                'Injured': 1802,
                'Mass_shootings': 346
            }, {
                'year': '2018-01-01',
                'Killed': 76,
                'Injured': 221,
                'Mass_shootings': 54
            } ]
        // url: '/MassShootingData'
    ,     keys: {
                    x: 'year',
                    value: ['Killed', 'Injured','Mass_shootings']
            }
            ,
        types: {
          'Mass_shootings': 'bar'
        },
        colors: {
            Killed: '#17BECF',
            Injured: 'rgba(204,204,204,1)',
            Mass_Shootings: 'rgba(222,45,38,0.8)'
        }
    },
    // colors: {
    //     Killed: '#ff0000',
    //     Injured: 'rgba(204,204,204,1)',
    //     Mass_shootings: 'rgba(204,204,204,1)'
    // },
  axis: {
      x: {
          type: 'timeseries',
          tick: {
             
              format: '%Y'
          }
      }
  }
});

//^&^^^^^^^^^^^^^^^
// for (var i = min(data.year); i < currentyear; i++) {

var chart2 = c3.generate({
    bindto: '#TotalShootingschart',
    title: {
        text: 'Total Shootings Chart'
      },
    data: {
        x: 'year',
        columns: [
            ['year', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01'],
            ['Killed', 317, 12228, 13840, 15020, 15537, 3528],
            ['injured', 979, 21705, 26350, 29970, 30429, 6026],
            ['Total_Shootings', 278, 32495, 40067, 45435, 46951, 10318]
        ],
          types: {
            'Total_Shootings': 'bar'
          },
          colors: {
            Killed: '#17BECF',
            Injured: 'rgba(204,204,204,1)',
            Total_Shootings: '#de2d26'
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
               
                format: '%Y'
            }
        }
    }
});

