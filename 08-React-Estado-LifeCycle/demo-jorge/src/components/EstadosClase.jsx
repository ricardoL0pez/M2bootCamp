//componente de clase
import React from "react";




class EstadosClase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, 
        };
    } 

    // componentDidMount(){
    //     console.log('Sono il componente montado');
    // }

    // componentDidUpdate(){
    //     console.log('Ciao, mi sono actualizado');
    // }

    render() {

        const aumentar = () => { //un arow function si sabe quien es this, sino lo hago con otro tipo de funcion tendrian que vindiarla
            this.setState({ count: this.state.count + 1 }, () => {console.log(this.state.count)}); //this.states modifica el estado
        }

        const disminuir = () => {
            this.state.count > 0 && this.setState({ count: this.state.count - 1 }, () => {console.log(this.state.count)});
        }

        const reiniciar = () => {
            this.setState({count: 0});
        };

        return (
            <>
            <h1>Contador con estados (clase)</h1>
            <h3>{this.state.count}</h3>
            <button onClick={disminuir}>-</button>
            <button onClick={reiniciar}>Reset</button>
            <button onClick={aumentar}>+</button>
            </>
        );
    }
}

export default EstadosClase;


