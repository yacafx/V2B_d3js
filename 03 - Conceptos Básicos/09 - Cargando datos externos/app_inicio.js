var datos = [];

function cargarDatos() {

}

function graficar() {
    var w = 500;
    var h = 300;

    var svg = d3.select('body')
        .append('svg')
        .attr("width", w)
        .attr("height", h);

    svg.selectAll("rect")
        .data(datos)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 100)

    .attr("x", function(d, i) {
            return i * 21 + 30
        })
        .attr("height", function(d) {
            return d.dato;
        })
        .attr("y", function(d) {
            return h - d.dato;
        })

    svg.selectAll("text")
        .data(datos)
        .enter()
        .append("text")
        .text(function(d) {
            return d.dato;
        })
        .attr("x", function(d, i) {
            return i * 21 + 40;
        })
        .attr("y", function(d) {
            return h - d.dato - 3;
        })
}
