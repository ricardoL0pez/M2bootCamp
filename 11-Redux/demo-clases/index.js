//* INDEX O STORE CONTIENE LA CONFIGURACION DEL STORE Lo primero que hacemos para trabajar con Redux es configurar el store
const { createStore } = require("redux");//Sintaxis CommonJS
const reducer = require("./reducer");
const {
    aumentarCount,
    cambiarInstructor,
    agregarCohorte,
    agregarAlumnos,
    sumarAlumnos,
    cambiarNombre
} = require("./action");
//STORE
const store = createStore(reducer);

/* const actualizarEstado = () => {
    console.log(store.getState());
}; */

console.log(store.getState());

//store.subscribe(actualizarEstado);

// Despachar las acciones y modificar el estado
store.dispatch(aumentarCount());
store.dispatch(cambiarInstructor());
store.dispatch(agregarCohorte());
store.dispatch(agregarAlumnos());
store.dispatch(sumarAlumnos());
store.dispatch(cambiarNombre('Betulla'));

console.log(store.getState());
//para ver el estado inicial


// La const store permite interactuar con él de varias maneras, como enviar acciones (con dispatch), obtener el estado actual (con getState), y registrarte para recibir notificaciones cuando cambia el estado (con subscribe).
//getState() proporcionado por la store de Redux. Permite consultar el estado global desde cualquier parte de la aplicación.
//sistemas para importar módulos: CommonJS (usando require) y ES Modules (usando import).