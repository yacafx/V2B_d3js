var datos = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function graficar() {
    d3.select('.miGrafica')
        .selectAll('div')
        .data(datos)
        .enter().append('div')
}
