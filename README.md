# charts
Facilitador de uso da biblioteca Echarts

jQuery v3.4.1 - <a href="https://jquery.com/download/">https://jquery.com/download/</a>
Bootstrap v4.3.1 - <a href="https://getbootstrap.com/" target="_blank">https://getbootstrap.com/</a>
Echarts 1.0 (Chinese) - <a href="https://echarts.apache.org/en/index.html">https://echarts.apache.org/en/index.html</a>

<hr> 

### Objetivo
<p>Echarts é uma biblioteca (lib) chinesa para javascript para criação de gráficos. Estou em um projeto que preciso utilizar esta biblioteca o que motivou a criação desse facilitador.</p>
<p>Esta lib possue outras versões para compatibilidade com ferramentas distintas para desenvolvimento web, entre elas uma versão para node. Devido ao escopo do projeto que me encontrar fazer tenha como necessidade o uso direto com jquery, foi o motivo de criar e disponibilizar este facilitador.</p>
<p>Conforme for necessário, a adição de outros elementos para criação do gráfico esta facilitada na classe Echarts.</p>

<hr>

### Exemples
<ol>
    <li>1. Crie o objeto instanciando a classe;</li>
    <li>2. Defina os parâmetros;</li>
    <li>3. Inicie o chart.</li>
</ol>
<pre>
// line -------------------------------------
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

// GAUGE -------------------------------------
var gauge = new Echarts(
    'gauge_percent',
    'Sensor',
    false,
    [
        {value: 50, name: 'MX-2'}
    ]
);
gauge._start();


// LARGE AREA -------------------------------
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
</pre>
