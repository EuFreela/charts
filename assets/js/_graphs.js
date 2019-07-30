class Echarts {
    
    constructor( type, text, legend=null, series, verbose=false ) 
    {
        this.type = type;
        this.text = text;
        this.legend = legend;
        this.series = series;
        this.types = [
            'line',
            'gauge_percent'
        ];
        
        this.getVerbose( verbose );        
    }
    
    _start( obj=
             {
                'line':true,
                'gauge_percent':true,
                'large_area':true
            } ) 
    {        
        
        switch( this.type ) {
        
            case 'line':
               obj.line ? this.graphLine() : console.log('>> Line False')
            break;
            case 'gauge_percent':
                 obj.gauge_percent ? this.graphGaugePercent() : console.log('>> Gauge Percent False');
            break;
            case 'large_area':
                obj.large_area ? this.graphLargeArea() : console.log('>> Large Area False'); ;
            break;
            
            default: 
                console.log("Gráfico não existente!");
        }        
    }
        
    // LINE ----------------------------------------------------------------
    graphLine()
    {
        console.log('>> Line')
        // CRIANDO ELEMENTO
        var div = document.createElement('div');        
        div.setAttribute('id','line');
        div.setAttribute('style','width:100%;height:600px;');
        var f = document.getElementById("main").appendChild( div )
        
        var line = echarts.init( f );
        var option = 
                {
                    title: {
                        text: this.text
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: this.legend
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                title: 'Salvar'
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.legend
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: this.series
                };
        
        line.setOption( option );
    }
    
    // GAUGE -------------------------------------------------------------------
    graphGaugePercent()
    {
        console.log('>> Gauge Percent')
        // CRIANDO ELEMENTO
        var div = document.createElement('div');        
        div.setAttribute('id','gauge_percent');
        div.setAttribute('style','width:100%;height:600px;');
        var f = document.getElementById("main").appendChild( div )
        var gauge_percent= echarts.init( f );
        
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {                   
                    saveAsImage: {
                        title: 'Salvar'
                    }
                }
            },
            series: [
                {
                    name: this.text,
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: this.series
                }
            ]
        };

        gauge_percent.setOption(option, false);   

    }
    
    // LARGE AREA -------------------------------------------------------------
    graphLargeArea()
    {
        console.log('>> Large Area')
        // CRIANDO ELEMENTO
        var div = document.createElement('div');        
        div.setAttribute('id','large_area');
        div.setAttribute('style','width:100%;height:600px;');
        var f = document.getElementById("main").appendChild( div )
        var large_area = echarts.init( f );
        
        // EXEMPLE
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: this.text,
            },
            toolbox: {
                feature: {                    
                    saveAsImage: {
                        title: 'Salvar'
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name:'Value',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    },
                    data: this.series
                }
            ]
        };
        
        large_area.setOption(option, false);   
        
    }
            
    getType() { console.log( `TYPE: ${this.type}` ); }
    getTypes() { console.log( `TYPES: ${this.types}` ); }
    getLegend(){ console.log( `LEGEND: ${this.legend}` ); }
    getSeries(){ console.log( this.series ); }
    
    getVerbose( obj )
    {
        if( obj ) {
            this.getType();
            this.getTypes();
            this.getLegend();
            this.getSeries();
        }
    }
    
}