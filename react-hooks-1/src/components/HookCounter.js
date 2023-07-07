import React ,{useState} from 'react'
//1.creating the component
export const HookCounter = () => {
    //array destructuring
    const [count,setCount]=useState(0)
    
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
        </div>
    )
}
