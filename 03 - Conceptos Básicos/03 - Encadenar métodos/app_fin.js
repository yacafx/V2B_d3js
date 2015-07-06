function seleccionarBloque(){
    d3.select('.bloque')
        .selectAll("div")
        .style("background-color", "blue")
        .style("color", "white")
        .style("padding", "5px")
        .style("margin", "5px")
}