import React from "react";

class Tarjeta extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <hr />
                <p>ID: {this.props.id}</p>
                <p>Name: {this.props.name}</p>
                <hr />
            </div>
        )
    };
};

export default Tarjeta;

/* import React from "react";
import { connect } from "react-redux"; // Importa la función connect para conectar el componente con Redux
import { addCharacter } from "../redux/action"; // Importa la acción addCharacter

class Tarjeta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Define los detalles del nuevo personaje
            newCharacter: {
                id: 100, // Aquí puedes utilizar un ID único, por ejemplo, 100
                name: "Nuevo Personaje" // Nombre del nuevo personaje
                // Agrega cualquier otra propiedad que necesites para el nuevo personaje
            }
        };
    }

    agregarNuevoPersonaje = () => {
        // Llama a la acción addCharacter pasando el nuevo personaje como argumento
        this.props.addCharacter(this.state.newCharacter);
    };

    render() {
        return (
            <div>
                <hr />
                <p>ID: {this.props.id}</p>
                <p>Name: {this.props.name}</p>
                <hr />
                <button onClick={this.agregarNuevoPersonaje}>
                    Agregar Nuevo Personaje
                </button>
            </div>
        );
    }
}

// Conectar el componente Tarjeta con Redux
const mapDispatchToProps = (dispatch) => {
    return {
        addCharacter: (newCharacter) => dispatch(addCharacter(newCharacter))
    };
};

export default connect(null, mapDispatchToProps)(Tarjeta); */



