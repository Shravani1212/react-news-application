import React,{useState} from 'react'
import useCounter from '../hooks/useCounter'

export const CounterOne = () => {
   const [count,increment,decrement,reset]=useCounter(20,12)
    return (
        <div>
            <h2>Count -{count}</h2>
            <button onClick={increment}>Increment -</button>
            <button onClick={decrement}>decrement -</button>
            <button onClick={reset}>Reset-</button>
        </div>
    )
}
