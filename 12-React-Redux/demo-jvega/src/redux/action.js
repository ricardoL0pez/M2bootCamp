import { GET_CHARACTERS, ADD_CHARACTER, REMOVE_CHARACTERS } from "./action-types";
import axios from "axios";

//ACTION CREATOR axios con asyn-await
export const getCharacters = () => {
    return async function(dispatch) {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        dispatch({ type: GET_CHARACTERS, payload: response.data });
        // No se necesita manejo de error aquí, será manejado donde se llame a la función getCharacters.
        return response; // Opcional: Puedes retornar la respuesta si es necesario.
    };
};

export const addCharacter = (newCharacter) => {
    return { type: ADD_CHARACTER, payload: newCharacter }
}


export const removeCharacter = (id) => {
    return { type: REMOVE_CHARACTERS, payload: id }
}


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


