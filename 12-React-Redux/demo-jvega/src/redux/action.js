import { GET_CHARACTERS, ADD_CHARACTER, REMOVE_CHARACTERS } from "./action-types"; // Importa los tipos de acciones desde el archivo action-types.js
import axios from "axios"; // Importa Axios para hacer peticiones HTTP

// ACTION CREATOR para obtener personajes usando Axios con async-await
export const getCharacters = () => {
    return async function(dispatch) {
        const response = await axios('https://jsonplaceholder.typicode.com/users'); // Realiza una solicitud GET para obtener datos de personajes desde una API (JSONPlaceholder en este caso)
        dispatch({ type: GET_CHARACTERS, payload: response.data }); // Despacha una acción con el tipo GET_CHARACTERS y los datos obtenidos como carga útil (payload)
        // No se necesita manejo de error aquí, será manejado donde se llame a la función getCharacters.
        return response; // Opcional: Puedes retornar la respuesta si es necesario.
    };
};

// ACTION CREATOR para agregar un nuevo personaje
export const addCharacter = (newCharacter) => {
    return { 
        type: ADD_CHARACTER, 
        payload: newCharacter 
    }; // Retorna una acción con el tipo ADD_CHARACTER y el nuevo personaje como carga útil (payload)
};

// ACTION CREATOR para eliminar un personaje
export const removeCharacter = (id) => {
    return { type: REMOVE_CHARACTERS, payload: id }; // Retorna una acción con el tipo REMOVE_CHARACTERS y el ID del personaje a eliminar como carga útil (payload)
};


//ACTION CREATOR fetch async-await
/* export const getCharacters = () => {
    return async function(dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (!response.ok) {
            console.log('Network response was not ok');
            return;
        }
        
        const data = await response.json();
        dispatch({ type: GET_CHARACTERS, payload: data });
    };
}; */


//ACTION CREATOR fetch
/* export const getCharacters = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => dispatch({ type: GET_CHARACTERS, payload: data }))

            .catch((error) => {
                console.log(error);
            })
    }
}; */

//para el checpoin recordar poner el return antes del fetch


//ACTION CREATOR axios v.Jorge
/* export const getCharacters = () => {
    return function (dispatch) {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((data) =>
            dispatch({ type: GET_CHARACTERS, payload: data.data })
        );
    };
}; */


