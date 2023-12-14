import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; //componente Provider
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Conexion con el store de Redux */}
    <App />
  </Provider>
);


{/* <Provider store={store}>
  <BrowsurerRouter>
    <App />
  </BrowsurerRouter>
</Provider> */}