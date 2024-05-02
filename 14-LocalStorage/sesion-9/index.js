var colores = [];

var inputColor = document.querySelector('#color');
inputColor.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) { //event.key==='Enter
        colores.push(inputColor.value);
        inputColor.value = '';
        llenaTabla();
    }
    console.log(event); 
});

function llenaTabla() {
    var body = '';
    for (var i = 0; i < colores.length; i++) {
        var btnEditar = '<button id="btnE'+i+'" data-indice="'+i+'" class="btn btn-warning">Editar</button>';
        var btnEliminar = '<button data-indice="'+i+'"class="btn btn-danger el">Eliminar</button>';
        var input = '<input id="input '+i+'" class="form-control d-none" value="'+colores[i]+'"><input>';
        var guardar='<button class="btn btn-success guar d-none" id="boton'+i+'" dta-indice="'+i+'">Guardar</button>'
        body += '<tr><td>' + (i + 1) + '</td><td>'+input+'<div id="div'+i+'">'+colores[i]+'</div></td><td>'+btnEditar+''+guardar+'</td><td>'+btnEliminar+'</td></tr>';
    }
    document.querySelector('#datos').innerHTML = body;
    EventSource();
}
