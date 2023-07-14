import React,{useRef,useState,useEffect} from 'react'

export const HookTimer = () => {
    
    const intervalRef=useRef()
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
      intervalRef.current=setInterval(()=>{setTimer(prevTimer=>prevTimer+1)},1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    return (
        <div>
            hook Timer ::  {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Stop the timer</button>
        </div>
    )
}
