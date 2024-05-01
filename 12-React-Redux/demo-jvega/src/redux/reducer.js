import { GET_CHARACTERS, ADD_CHARACTER, REMOVE_CHARACTERS } from "./action-types";
// Importa los tipos de acciones (action types) desde el archivo action-types.js

// ESTADO GLOBAL INICIAL
const initialState = {
    characters: [] // Estado inicial con un arreglo vacío para almacenar los personajes
};

// REDUCER
const rootReducer = (state = initialState, action) => {
    // La función rootReducer toma dos argumentos: state (estado actual) y action (acción despachada)
    switch (action.type) {
        case GET_CHARACTERS:
            // Caso GET_CHARACTERS: actualiza el estado con los personajes obtenidos desde action.payload
            return { ...state, characters: action.payload };

        case ADD_CHARACTER:
            // Caso ADD_CHARACTER: agrega un nuevo personaje al arreglo existente de personajes en el estado
            return {
                ...state,
                characters: [...state.characters, action.payload] // Añade action.payload al arreglo de personajes
            };

        case REMOVE_CHARACTERS:
            // Caso REMOVE_CHARACTERS: elimina un personaje del arreglo de personajes en el estado
            return {
                ...state,
                characters: state.characters.filter(
                    (chart) => chart.id !== action.payload
                ) // Retorna un nuevo arreglo sin el personaje cuyo ID coincide con action.payload
            };

        default:
            // Caso por defecto: en caso de no coincidir con ninguna acción conocida, retorna el estado actual
            return { ...state };
    }
};

export default rootReducer; // Exporta el rootReducer para ser utilizado en la configuración del store de Redux
