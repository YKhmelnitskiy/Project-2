var chart = c3.generate({
    bindto: '#MassShootingschart',
    title: {
        text: 'Mass Shootings Chart'
      },
    data: {
      x: 'x',
      columns: [
          ['x', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01'],
          ['Killed', 288, 265, 366, 456, 437, 76],
          ['Injured', 961, 1083, 1324, 1537, 1802, 221],
          ['Mass shootings', 253, 270, 332, 383, 346, 54]
      ],
        types: {
          'Mass shootings': 'bar'
        }
    },
    // colors: {
    //     Killed: '#ff0000',
    //     Injured: '#00ff00',
    //     Mass_shootings: '#0000ff'
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
        x: 'x',
        columns: [
            ['x', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01'],
            ['Killed', 317, 12228, 13840, 15020, 15537, 3528],
            ['injured', 979, 21705, 26350, 29970, 30429, 6026],
            ['Total Shootings', 278, 32495, 40067, 45435, 46951, 10318]
        ],
          types: {
            'Total Shootings': 'bar'
          }
    },
    // colors: {
    //     Killed: '#ff0000',
    //     Injured: '#00ff00',
    //     Total_Shootings: '#0000ff'
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

