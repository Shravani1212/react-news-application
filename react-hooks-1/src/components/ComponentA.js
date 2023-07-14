import React, { useContext } from 'react'
import { ComponentC } from './ComponentC'
import { CountContext } from '../App'

export const ComponentA = () => {
    const countContext=useContext(CountContext)
    return (
        <div>
            Componenet A
            Count--{countContext.countState}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>

        </div>
    )
}
