//componente funcional
import { useState, useEffect } from "react";

const ContadorFuncional = () => {

    const [counter, setCounter] = useState(0) ;

    const aumentar = () => {
        setCounter(counter + 1);
    };

    const disminuir = () => {
        setCounter(counter - 1);
    };

    const resetear = () => {
        setCounter(counter = 0);
    };

    useEffect(
        () => {
            console.log('Ciao! Sono el componente montado');
        }, []
    )

    return (
        <>
        <h1>Contador funcional</h1>
        <p>{counter}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={resetear}>Reset</button>
        <button onClick={disminuir}>Disminuir</button>
    </>
    )
    
};

export default ContadorFuncional;