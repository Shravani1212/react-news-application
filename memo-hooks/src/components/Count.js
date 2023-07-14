import React ,{useMemo, useState} from 'react'

export const Count = () => {
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    const increment1=()=>{
        setCounter1(counter1+1)
    }
    const increment2=()=>{
        setCounter2(counter2+1)
            }
        const isEven=useMemo(()=>{
            let i=0;
            while(i<20000000) i++
            
            return counter1%2===0
        },[counter1])
    return (
        <div>
             <button onClick={increment1}>Count One {counter1}</button>
            <span>{isEven?"Even":"Odd"}</span>
            <button onClick={increment2}>Count Two{counter2}</button>
        </div>
    )
}
