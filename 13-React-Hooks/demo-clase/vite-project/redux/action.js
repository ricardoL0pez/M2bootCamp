import { GET_ALL_USERS, USER_DETAIL } from './actiontype';
import axios from 'axios';

/* export const getAllUsers = () => { //cada vez que tena una action que va a pedri una solcitud a un servidor, lo que retorna esta action e suna funcion conun dispatch como parametro
    return async (dispatch) => {
        try {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users');

            return dispatch({
                type: GET_ALL_USERS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
} */

export const getAllUsers = () => {
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
};