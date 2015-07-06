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
}
