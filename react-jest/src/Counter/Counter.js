import React, { useState } from 'react';

import './Counter.css';

export default function Counter(){
    let [counter, setCounter] = useState(1);
    return(
        <div className="counter">
            <button onClick={() => setCounter(counter+1)}>+</button>
            <div data-test='count'>{counter}</div>
            <button onClick={() => setCounter(counter-1)}>-</button>
        </div>
    )
}