function seleccionar() {
    d3.selectAll("div")
        .style("background-color", "green");
}

function seleccionarBloque(){
    d3.select('.bloque')
        .selectAll("div")
        .style("background-color", "red");
}