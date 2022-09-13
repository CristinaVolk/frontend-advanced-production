import React, {useState} from 'react';

import './Counter.css'

export const Counter = () => {

    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className="increment-btn" onClick={increment}>Increment</button>
        </div>
    );
};

