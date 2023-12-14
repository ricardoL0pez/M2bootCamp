const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = { //ESTADO INICIAL
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

//*REDUCER ARMADO PARA RECIBIR LAS ACCIONES
function contador(state = initialState, action) { //*REDUCER aqui la reducer tiene el nombre de contador
  switch (action.type) {
    case INCREMENTO: 
      return {
        ...state, //Se puede o no agregar el spread operator, ya que el estado contador esta en cero y no existe mas información
        contador: state.contador + 1
      }

    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - 1
      }

    default:
      return { ...state }
  };
};

module.exports = contador;



//function contador(state = initialState, type, reload)