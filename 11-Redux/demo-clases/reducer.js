//*REDUCER CONTIEN ESTADO INICIAL Y FUNCION REDUCER
const { AUMENTAR_COUNT, CAMBIAR_INSTRUCTOR, AGREGAR_COHORTE, AGREGAR_ALUMNOS, SUMAR_ALUMNOS, CAMBIAR_NOMBRE } = require('./action-types');
//ESTADO GLOBAL
const initialState = {
    count: 0,
    instructor: '',
    cohorte: '',
    alumnos: []
};
//REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUMENTAR_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case CAMBIAR_INSTRUCTOR:
            return {
                ...state,
                instructor: action.payload
            };
        case AGREGAR_COHORTE:
            return {
                ...state,
                cohorte: action.payload
            };
        case AGREGAR_ALUMNOS:
            return {
                ...state,
                alumnos: action.payload
            };
        case SUMAR_ALUMNOS:
            return {
                ...state,
                alumnos: [...state.alumnos, ...action.payload]
            };
        case CAMBIAR_NOMBRE:
            return {
                ...state,
                nombre: action.payload // Suponiendo que 'nombre' es un campo del estado
            };
        default:
            return { ...state };
    }
};

module.exports = reducer;


//El reducer siempre nos va a devolver el estado

/* if(action.type === AUMENTAR_COUNT){
    return {
        ...state,
        count: state.count + 1
    }
}
if(action.type === CAMBIAR_INSTRUCTOR){
    return {
        ...state,
        instructor: action.payload
    }
} */