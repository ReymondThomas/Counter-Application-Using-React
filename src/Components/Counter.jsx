import React from 'react'
import { useState } from 'react'
import "./Counter.css"
function Counter() {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className="counter-main">
            <h1 className="heading">Counter Application Using React</h1>
            <h1 className="count">{count}</h1>
            <button className="decrement-buttons" onClick={decrement}>Decrement</button>
            <button className="reset-buttons" onClick={reset}>Reset</button>
            <button className="increment-buttons" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter