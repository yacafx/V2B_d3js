var datos = [];

function cargarDatos() {
    d3.json('datos.json', function(err, data) {
        datos = data;
        graficar();
    });
}

function graficar() {
    var width = 300;
    var height = 300;

    var radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
        .range(["Brown", "CadetBlue", "CornflowerBlue", "DarkGoldenRod", "Yellow", "DarkMagenta", "DarkRed", "GreenYellow", "HotPink", "Peru", "Tomato", "Teal", "Salmon"]);

    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var pie = d3.layout.pie()
        .value(function(d) {
            return d.dato;
        });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(datos))
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) {
            return color(d.data.nombre);
        });

    g.append("text")
        .text(function(d) {
            return d.data.nombre + " (" + d.data.dato + ")";
        })
        .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + "), rotate(" + angle(d) + ")";
        })

    function angle(d) {
        var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
        return a > 90 ? a - 180 : a;
    }


}
