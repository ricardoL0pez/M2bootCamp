// Importación de módulos y configuraciones necesarias de Redux
import { createStore, applyMiddleware, compose } from 'redux'; // Importa funciones y herramientas de Redux
import thunk from 'redux-thunk'; // Importa el middleware 'redux-thunk' para manejar acciones asíncronas
import rootReducer from '../reducer/index'; // Importa el rootReducer que combina todos los reducers de la aplicación

// Configuración para la integración de la extensión de Redux DevTools del navegador
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Si la extensión Redux DevTools está disponible en el navegador, utiliza la función de composición avanzada
// Si no está disponible, utiliza la función 'compose' de Redux

// Creación del store de Redux
const store = createStore(
    rootReducer, // El rootReducer que combina todos los reducers de la aplicación
    composeEnhancer(applyMiddleware(thunk)) // Aplica la configuración con Redux DevTools y aplica el middleware 'redux-thunk'
);

export default store; // Exporta el store para su uso en otros archivos de la aplicación
