import React,{useState} from 'react'
import useCounter from '../hooks/useCounter'

export const CounterTwo = () => {
    const [count1,increment,decrement,reset]=useCounter(11,10)
   
    return (
        <div>
            <h2>Count -{count1}</h2>
            <button onClick={increment}>Increment -</button>
            <button onClick={decrement}>decrement -</button>
            <button onClick={reset}>Reset-</button>
        </div>
    )
}
