//crud con ararray
import { storage } from './storage.js';

var colores = storage.obtener('colores').split(',');
llenaTabla();

var inputColor = document.querySelector('#color');
inputColor.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) { //event.key==='Enter
        colores.push(inputColor.value);
        storage.asignar('colores',colores);
        inputColor.value = '';
        llenaTabla();
    }

});

function llenaTabla() {
    var body = '';
    for (var i = 0; i < colores.length; i++) {
        var btnEditar = '<button id="btnEditar' + i + '" data-indice="' + i + '" class="btn btn-warning btnEditar">Editar</button>';
        var btnEliminar = '<button data-indice="' + i + '" class="btn btn-danger btnEliminar">Eliminar</button>';
        var input = '<input id="input' + i + '" class="form-control d-none" value="' + colores[i] + '"></input>';
        var guardar = '<button class="btn btn-success btnGuardar d-none" id="btnGuardar' + i + '" data-indice="' + i + '">Guardar</button>';
        body += '<tr><td>' + (i + 1) + '</td><td>' + input + '<div id="div' + i + '">' + colores[i] + '</div></td><td>' + btnEditar + '' + guardar + '</td><td>' + btnEliminar + '</td></tr>';
    }
    document.querySelector('#datos').innerHTML = body;
    eventos(); 
}

function eventos() {
    var btnEliminar = document.querySelectorAll('.btnEliminar');
    btnEliminar.forEach(elemento => elemento.addEventListener('click', event => {
        var indice = event.target.getAttribute('data-indice'); 
        eliminar(indice);
    }));
    var btnEditar = document.querySelectorAll('.btnEditar');
    btnEditar.forEach(elemento => elemento.addEventListener('click', event => {
        var indice = event.target.getAttribute('data-indice'); 
        mostrar(indice);
    }));
    var btnGuardar = document.querySelectorAll('.btnGuardar');
    btnGuardar.forEach(elemento => elemento.addEventListener('click', event => {
        var indice = event.target.getAttribute('data-indice'); 
        actualizar(indice);
    }));
}

function eliminar(indice) { 
    colores.splice(indice,1);
    storage.asignar('colores',colores);
    llenaTabla();
}
function mostrar(indice) {
    var div = document.querySelector('#div'+indice);
    var campo = document.querySelector('#input' +indice);
    var botonEditar = document.querySelector('#btnEditar' +indice);
    var botonGuardar = document.querySelector('#btnGuardar' +indice); 
    div.classList.add('d-none');
    campo.classList.remove('d-none');
    botonEditar.classList.add('d-none');
    botonGuardar.classList.remove('d-none');
}

function actualizar(indice) {
    var nuevoColor= document.querySelector('#input' +indice).value;
    colores[indice] = nuevoColor;
    storage.asignar('colores',colores);
    llenaTabla();
}
