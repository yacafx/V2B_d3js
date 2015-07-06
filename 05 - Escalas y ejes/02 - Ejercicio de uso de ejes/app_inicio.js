var datos = [];

function cargarDatos() {
    d3.json('datos.json', function(err, data) {
        datos = data;
        graficar();
    });
}

function graficar() {
    var width = 300,
        height = 300;


    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")


    xRange = d3.scale.linear()
        .range([0, width])
        .domain([d3.min(datos, function(d) {
                return d.x;
            }),
            d3.max(datos, function(d) {
                return d.x;
            })
        ])

    yRange = d3.scale.linear()
        .range([height, 0])
        .domain([d3.min(datos, function(d) {
                return d.y;
            }),
            d3.max(datos, function(d) {
                return d.y;
            })
        ])

    var lineFunc = d3.svg.line()
        .x(function(d) {
            return xRange(d.x + 20);
        })
        .y(function(d) {
            return yRange(d.y+16);
        })
        .interpolate('basis');

    svg.append("svg:path")
        .attr("d", lineFunc(datos))
        .attr("class", "linea");
}
