import React ,{useContext}from 'react'
import { ComponentE } from './ComponentE'
import { CountContext } from '../App'

export const ComponentC = () => {
    const countContext=useContext(CountContext)

    return (
        <div>
            Component C
            Count--{countContext.countState}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        <ComponentE/>
        </div>
    )
}
