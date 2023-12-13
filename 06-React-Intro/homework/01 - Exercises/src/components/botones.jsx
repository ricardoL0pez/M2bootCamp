import React from "react";

class Botones extends React.Component {
    constructor(props) { //las props siempren llegan en objetos {alertas:{m1:"Aprobado", m2:"En curso"}}
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick={() => alert(this.props.alertas.m1)}>Modulo 1</button>
                <button onClick={() => alert(this.props.alertas.m2)}>Modulo 2</button>
            </div>
        )
    }
}

export default Botones;

