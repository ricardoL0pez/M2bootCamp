//
//sesion13

import {storage} from "./storage"

let btn= document.querySelector('#button');
btn.addEventListener('click',()=>{
    let newName = document.querySelector('#newname');
    document.querySelector('#name').innerHTML = newName.value;
    
    //window.localStorage.setItem('user',newName.value);
    storage.asignar('user',newName.value) //Usamos un metodo: asignar

    newName.value='';
});

//let nameLocal = window.localStorage.getItem('user');
let nameLocal = storage.obtener('user'); //Usamos un metodo: obtener
document.querySelector('#nameInLocalStorage').innerHTML = nameLocal;
