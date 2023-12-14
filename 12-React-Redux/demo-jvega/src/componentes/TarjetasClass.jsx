import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../redux/action";
import Tarjeta from "./Tarjeta";


class TarjetasClass extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() { //Se monta el componente. componentDidMount método del ciclo de vida de un componente en React. Cuando el componente se monta
        this.props.getCharacters(); //Es la funcion que puede hacer dispatch
    };

    render() {
        return (
            <div>
                <h1>Componente Cards de Clase</h1>
                <div>
                    {this.props.characters.map((character) => {
                        return <Tarjeta
                            id={character.id}
                            name={character.name}
                            key={character.id}
                        />;
                    })}
                </div>

            </div>
        );
    };
};

const mapStateToProps = (state) => { //recibe el estado como parametro desde reducer.js
    return {
        characters: state.characters, //Este character pasa como props del componente 
    }
}

const mapDispatchToProps = (dispatach) => {
    return {
        getCharacters: () => {
            dispatach(getCharacters());
        }
    }
};

export default connect( //suscribimos al componente
    mapStateToProps,
    mapDispatchToProps
)(TarjetasClass);



/* import React from "react";

class ComponenteClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Componente Class</h1>
            </div>
        );
    };
};

export default ComponenteClass; */