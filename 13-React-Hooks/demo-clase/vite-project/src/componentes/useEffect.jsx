import { useEffect, useState } from "react";

/* 1. Call back
2. Array de dependencias */
/* Montaje */
const Montaje = () => {
    const [count, setCount] = useState(0); //setCount es la funcion para modificar el estado

    useEffect(() => {
        console.log('Este componente se monto');
    }, []); //Array o arreglo de dependecias vacio para que el efecto de ejecute solo una vez montado el componente
};
/* Actualizacion */
const Actualizacion = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Este componente se monto');
    }, [count]); //Si se especifica la dependecia, se desencadena la ejecución del efecto uando esta cambie su estado.
};
/* Desmontaje */
const Desmontaje = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        return console.log('Este componente se monto');
    }, [count]);
};