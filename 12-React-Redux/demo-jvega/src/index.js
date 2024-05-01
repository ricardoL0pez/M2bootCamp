import React from 'react'; // Importa React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM (client-side only)
import './index.css'; // Importa los estilos CSS para este archivo
import App from './App'; // Importa el componente principal de la aplicación
import { Provider } from 'react-redux'; // Importa el componente Provider de react-redux
import store from './redux/store'; // Importa el store de Redux

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea un root para renderizar la aplicación en el DOM
root.render( // Renderiza la aplicación en el DOM usando el root creado
  <Provider store={store}> {/* Proporciona el store de Redux a la aplicación */} {/* Conexion con el store de Redux */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </Provider>
);

{/* <Provider store={store}>
  <BrowsurerRouter>
    <App />
  </BrowsurerRouter>
</Provider> */}