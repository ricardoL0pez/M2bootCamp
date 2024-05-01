import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handlerClick = (event) => {
        if (event.target.name === 'increment') {
            setCount(count + 1);
        } else if (event.target.name === 'decrement') {
            if (count <= 0) {
                return;
            } else {
                setCount(count - 1);
            }
        }
    };
    /* Operador ternario */
    /* const handlerClick = (event) => {
        event.target.name === 'increment'
            ? setCount(count + 1)
            : count <= 0
                ? null // Otra opción es dejarlo vacío si no necesitas hacer nada en caso de count <= 0
                : setCount(count - 1);
    }; */

   useEffect(() => {
        if (count > 10) {
            return setCount(0)
        }
    }, [count]);


    return (
        <div>
            <h1>Counter</h1>

            <button name='increment' onClick={handlerClick}>+</button>
            <p>{count}</p>
            <button name='decrement' onClick={handlerClick}>-</button>
        </div>
    )
}

export default Counter;