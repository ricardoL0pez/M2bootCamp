const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
let store = createStore(contador);//El parámetro-argumento que recibe es el reducer 
//let store = createStore(reducer);
let valor = document.querySelector("#valor") // Obtenemos el elemento con el id `valor`.


// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() { //esta funcion no puede modificar el store, lo hace el reducer, esta funcion trae el estado del store y lo muestra en valor
  // Obtenemos la propiedad 'contador' de nuestro store:
  let counter = store.getState().contador //getState trae el estado completo. El estado es un objeto, entonces accedemos al valor de contador por notacion de punto. 
  // Seteamos (actualizar, modificar, cambiar valor) el número obtenido como texto dentro del elemento con id 'valor': dentro del elemento con ID valor tenemos que mostrar lo que nos trajimos como estado
  valor.innerHTML = counter;
}

// Ejecutamos la función 'renderContador':
renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
let incrementoButton = document.querySelector("#incremento");
incrementoButton.addEventListener("click", () => store.dispatch(incremento())); //cuando hago dispatch se lo hago a la acción creator
                                                                  //una funcion invocada es lo que retorna la misma fucnión
let decrementoButton = document.querySelector("#decremento");
decrementoButton.addEventListener("click", () => store.dispatch(decremento()));

let incrementoImparButton = document.querySelector("#incrementoImpar");
incrementoImparButton.addEventListener("click", () => 
store.getState().contador % 2 !== 0 && store.dispatch(incremento()));//Traigo el estado y verifico ai el valro de contador es impar

let incrementoAsyncButton = document.querySelector("#incrementoAsync");
incrementoAsyncButton.addEventListener("click", () => setTimeout(()=>{
  store.dispatch(incremento())
},2000))