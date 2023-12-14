// Importa los tipos de acciones desde el archivo types.js en actions
import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "../actions/types";

// Define el estado inicial del store
const initialState = {
    list: [], // Lista de productos
    storeName: "" // Nombre de la tienda
};

// Define el rootReducer, que es una función que recibe el estado actual (state) y una acción (type y payload)
const rootReducer = (state = initialState, { type, payload }) => {//actions { type, payload 
    // Evalúa el tipo de acción y actualiza el estado en consecuencia
    switch (type) {  //No evaluo action.type, evaluo type por que hice el destructuring

        case ADD_PRODUCT:
            // Agrega un nuevo producto a la lista de productos en el estado
            return {
                ...state,
                list: [...state.list, payload] // Agrega el nuevo producto al final de la lista
            };

        case DELETE_PRODUCT:
            // Elimina un producto de la lista basado en el payload (id del producto a eliminar)
            return {
                ...state,
                list: state.list.filter((product) => {
                    return product.id !== payload; // Filtra y retorna una nueva lista sin el producto con el id especificado en el payload
                })
            };

        case GET_STORE_NAME:
            // Actualiza el nombre de la tienda en el estado
            return {
                ...state,
                storeName: payload // Actualiza el nombre de la tienda con el valor enviado en el payload
            };

        default:
            // Si la acción no coincide con ninguna de las acciones definidas, devuelve el estado actual sin cambios
            return { ...state };

    }
};

export default rootReducer; // Exporta el rootReducer para ser utilizado en la creación del store de Redux


/* import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "../actions/types";: Importa los tipos de acciones desde el archivo types.js en la carpeta actions. Estos tipos son constantes que representan los nombres de las acciones que se pueden despachar en la aplicación.
const initialState = {...};: Define el estado inicial del store de Redux con una lista de productos vacía (list: []) y un nombre de tienda vacío (storeName: "").
const rootReducer = (state = initialState, { type, payload }) => { ... };: Define el rootReducer, que es una función que recibe el estado actual (o el estado inicial si no está definido) y una acción (con propiedades type y payload). El rootReducer es responsable de actualizar el estado global de la aplicación en base al tipo de acción y su payload.
switch (type) { ... }: Se utiliza una estructura switch para manejar diferentes tipos de acciones. Dependiendo del tipo de acción (representado por type), se actualiza el estado en consecuencia.
Dentro de cada case del switch, se actualiza el estado de acuerdo a la acción especificada:
ADD_PRODUCT: Agrega un nuevo producto a la lista de productos.
DELETE_PRODUCT: Elimina un producto de la lista basado en el payload (id del producto a eliminar).
GET_STORE_NAME: Actualiza el nombre de la tienda en el estado.
default:: Si la acción no coincide con ninguno de los tipos de acciones definidos, devuelve el estado actual sin cambios.
export default rootReducer;: Exporta el rootReducer para que pueda ser utilizado en la configuración del store de Redux y ser combinado con otros reducers si es necesario. */

//Con constante
/* case DELETE_PRODUCT:
    const listFiltered = state.list.filter((product) => {
        return product.id != payload
    })
    return {
        ...state,
        list: listFiltered
    } */
