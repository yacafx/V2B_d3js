var datos = [1, 2, 3, 5, 8, 11, 13, 21, 34, 55, 89, 144]

function graficar() {
    d3.select('.miGrafica')
        .selectAll('div')
        .data(datos)
        .enter().append('div')
        .attr('class', 'barra')
        .style("height", function(d) {
            return d + "px";
        })
}
