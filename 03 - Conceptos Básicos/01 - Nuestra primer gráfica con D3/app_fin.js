var datos = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

var x = d3.scale.linear()
    .domain([0, d3.max(datos)])
    .range([0, 144]);

function graficar() {
    d3.select(".barras")
        .selectAll("div")
        .data(datos)
        .enter().append("div")
        .style("width", function(d) {
            return x(d) + "px";
        })
        .text(function(d) {
            return d;
        });
}
