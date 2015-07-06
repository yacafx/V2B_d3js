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
        .append("g");

}
