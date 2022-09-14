import React, {useState} from 'react';

import classes from './Counter.module.css'

export const Counter = () => {

    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <h1 className={classes.count}>{count}</h1>
            <button className={classes.incrementBtn} onClick={increment}>Increment</button>
        </>
    );
};

