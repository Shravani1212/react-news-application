import React, { useEffect, useState } from 'react'

export const HookMouse = () => {
   const [x,setX]= useState(0)

   const [y,setY]=useState(0)
   const logMousePoistion=e=>{
    console.log("Mouse EVent")
    setX(e.clientX)
    setY(e.clientY)
   }
   useEffect(()=>{
    console.log("UseEffect Called")
    window.addEventListener('mousemove',logMousePoistion)
    return ()=>{
        console.log("Componenet unmounting code")
        window.removeEventListener('mousemove',logMousePoistion)
    }
   },[])
    return (
        <div>
            X---{x}
            Y---{y}
        </div>
    )
}
