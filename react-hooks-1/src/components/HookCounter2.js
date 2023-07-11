

import React ,{useState} from 'react'
//1.creating the component
export const HookCounter2 = () => {
    //array destructuring
    const [count,setCount]=useState(0)
    
    return (
        <div>
            Count={count}
            <button onClick={()=>{setCount(0)}}>Reset </button>
            <button onClick={()=>{setCount(prevState=>(prevState+1))}}>Increment {count}</button>
            <button onClick={()=>{setCount(prevState=>(prevState-1))}}>Decrement{count}</button>
            <button onClick={()=>{setCount(prevState=>(prevState+5))}}>Increment 5 {count}</button>
        </div>
    )
}
