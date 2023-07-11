import React,{useState} from 'react'

export const HookCounter3 = () => {
   const [name,setName]= useState({
        firstName:'',
        lastName:''
   }
    )
    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                <input type='text' value={name.lastNamestName} onChange={e=>setName({...name,lastName:e.target.value})}/>
                <h1>Your firName is : {name.firstName} </h1>
                <h1>Your lastName is : {name.lastName} </h1>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}
//useState hook doesnot automatically merge and update the object
//this is the key difference to setstate which you come across in class componenets 
//setStatewill merge the state automatically where as useState hook setter function will not merge automatically
//we have to  do it manually
//by using spread operator to handle manual merge 
//it copies eveery property of the name object and then just override firNAme and lastNAme fields the different value
