import React, {useEffect, useState}from 'react'

export const HookCounter5 = () => {
   const [count,setCount]=useState(0)
   const [name,setName]=useState('')
   useEffect(
    ()=>{
        console.log(`useEffect- Updating document title`)
        document.title=`You clicked ${count} times`
    },[count]
   )
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            
            <button onClick={()=>setCount(count+1)}>Clicked {count} times </button>
        </div>
    )
}
