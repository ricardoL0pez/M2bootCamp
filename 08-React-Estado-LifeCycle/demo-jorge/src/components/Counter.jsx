import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (event) => {
        event.target.name === "increment" ? setCount(count + 1) : setCount(count - 1)
    }
    return (
        <div>
            <h1>Cunter</h1>
            <button name="decrement" onClick={handleClick}>-</button>
            <button name="increment" onClick={handleClick}>+</button>
        </div>
    )
};

export default Counter;