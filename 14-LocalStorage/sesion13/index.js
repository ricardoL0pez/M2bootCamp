import { storage } from './storage.js';

let btn= document.querySelector('#button');
btn.addEventListener('click',()=>{
    let newName = document.querySelector('#newname');
    document.querySelector('#name').innerHTML = newName.value;
    
    /* window.localStorage.setItem('user',newName.value); */
    storage.asignar('user',newName.value)  

    newName.value='';
});

/* let nameLocal = window.localStorage.getItem('user'); */
let nameLocal = storage.obtener('user');
document.querySelector('#nameInLocalStorage').innerHTML = nameLocal;

let btnClear= document.querySelector('#clear');
btnClear.addEventListener('click',()=>{
    window.localStorage.clear();
})
//https://www.youtube.com/watch?v=fs7ZsQkf1uo
//
//sesion13

