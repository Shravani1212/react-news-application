import React,{useContext} from 'react'
import { ComponentD } from './ComponentD'
import { CountContext } from '../App'

export const ComponentB = () => {
    const countContext=useContext(CountContext)
    return (
        <div>
            Component B
            Count--{countContext.countState}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            <ComponentD/>
        </div>
    )
}
