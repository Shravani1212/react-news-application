import React, { useState,useEffect } from 'react'

export const IntervalHookCounter = () => {
    const [count,setCount]=useState(0)
    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
        doSomething()
        const interval=setInterval(tick,1000)  
        console.log("Count is increasing")
        return ()=>{
            clearInterval(interval)
        }
    },['someprops'])
    function doSomething(){
        console.log('someProps')
    }
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
