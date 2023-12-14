import { GET_CHARACTERS, ADD_CHARACTER, REMOVE_CHARACTERS } from "./action-types";
//ESTADO GLOBAL
const initialState = {
    characters: [

    ],
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return { ...state, characters: action.payload };

        case ADD_CHARACTER:
            return { ...state, 
                characters: [...state.characters, action.payload] }

        case REMOVE_CHARACTERS:
            return {
                ...state,
                characters: state.characters.filter(
                    (chart) => chart.id !== action.payload
                ),
            };
        default:
            return { ...state };
    }
}; //El reduceres una función y resive el estado que modifica

export default rootReducer;