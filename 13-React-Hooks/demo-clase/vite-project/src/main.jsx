import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from '../redux/store.js';


const root = ReactDOM.createRoot(document.getElementById("root")); // Crea una raíz para renderizar la aplicación en el elemento con el ID "root"

root.render( // Renderiza la aplicación en la raíz creada
    <Provider store={store}> {/* Proveedor que conecta la aplicación con el store de Redux. Así App podra acceder a las actions*/}
        <App /> {/* Componente principal de la aplicación */}
    </Provider>
);