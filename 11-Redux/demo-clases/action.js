//* LAS ACTIONS CONTIENEN FUNCIONES QUE RETORNAN UN OBJETO

/* store.dispatch({ type: AUMENTAR_COUNT })
store.dispatch({ type: CAMBIAR_INSTRUCTOR, payload: "Dai" })
store.dispatch({ type: AGREGAR_COHORTE, payload: "PT15b" })
store.dispatch({ tyep: "AGREGAR_ALUMNOS", payload: [salamandra, serpiente, araña] })
store.dispatch({ type: SUMAR_ALUMNOS, payload: ['musaraña', 'topo'] })
 */
const { AUMENTAR_COUNT, CAMBIAR_INSTRUCTOR, AGREGAR_COHORTE, AGREGAR_ALUMNOS, SUMAR_ALUMNOS, CAMBIAR_NOMBRE } = require('./action-types');

const aumentarCount = () => {
    return {
        type: AUMENTAR_COUNT
    };
};

const cambiarInstructor = () => {
    return {
        type: CAMBIAR_INSTRUCTOR,
        payload: "Dai"
    };
};

const agregarCohorte = () => {
    return {
        type: AGREGAR_COHORTE,
        payload: "PT15b"
    };
};

const agregarAlumnos = () => {
    return {
        type: AGREGAR_ALUMNOS,
        payload: ['salamandra', 'serpiente', 'araña']
    };
};

const sumarAlumnos = () => {
    return {
        type: SUMAR_ALUMNOS,
        payload: ['musaraña', 'topo']
    };
};

const cambiarNombre = (nuevoNombre) => {
    return {
        type: CAMBIAR_NOMBRE,
        payload: nuevoNombre
    };
};

module.exports = {
    aumentarCount,
    cambiarInstructor,
    agregarCohorte,
    agregarAlumnos,
    sumarAlumnos,
    cambiarNombre
};


/* // Acción para cambiar el nombre
export function cambiarNombre(nuevoNombre) {
    return {
      type: CAMBIAR_NOMBRE,
      payload: nuevoNombre
    };
  } */