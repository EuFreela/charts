var line = new Echarts(
    'line',
    'Sensores',
    ['ZA-1','DS-2','MR-3','MM4','XS-2'],
    [
        {
            name:'ZA-1',
            type:'line',
            stack: 'ww',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'DS-2',
            type:'line',
            stack: 'ww',
            data:[220, 182, 191, 234, 290, 330, 110]
        },
        {
            name:'MR-3',
            type:'line',
            stack: 'ww',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'MM4',
            type:'line',
            stack: 'ww',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'XS-2',
            type:'line',
            stack: 'ww',
            data:[820, 22, 221, 1134, 290, 330, 320]
        }
    ]
);
line._start();

var gauge = new Echarts(
    'gauge_percent',
    'Sensor',
    false,
    [
        {value: 50, name: 'MX-2'}
    ]
);
gauge._start();



var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
var data = [Math.random() * 300];
for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
var large_area = new Echarts(
    'large_area',
    'Sensor',
    false,
    data
);
large_area._start();


