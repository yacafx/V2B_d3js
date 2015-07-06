var datos = [1, 2, 3, 5, 8, 11, 13, 21, 34, 55, 89, 144]

function graficar() {
    d3.select('.miGrafica')
        .selectAll('div')
        .data(datos)
        .enter().append('div')
        .text(function(d) {
            if (d == 1) {
                return 'Ricardito ha tenido ' + d + ' balon';
            } else {
                return 'Ricardito ha tenido ' + d + ' balones';
            }
        })
        .style("background-color", "green")
        .style("color", "white")
        .style("padding", "5px")
        .style("margin", "5px")
        .style("text-align", "right")
}
