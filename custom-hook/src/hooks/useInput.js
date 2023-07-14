import React,{useState} from 'react'

function useInput(initialValue) {
    const [value,setValue]=useState(initialValue)
   const reset=()=>{
    setValue(initialValue)
   }
   const Bind={
    value,
    onChange:e=>setValue(e.target.value)

   }
   return [value,Bind,reset]
   
}

export default useInput
