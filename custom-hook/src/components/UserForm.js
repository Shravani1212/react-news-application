import React ,{useState} from 'react'
import useInput from '../hooks/useInput'

export const UserForm = () => {
    const [firstName,bindFname,resetFname]=useInput('')
    const [lastName,bindLname,resetLname]=useInput('')
    // const [fName,setFName]=useState('')
    // const [lName,setLName]=useState('')
    const submitEvent=e=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFname()
        resetLname()
    }
    return (
        <div>
            <form onSubmit={submitEvent}>
            FirstNAme::<input type='text'{...bindFname}/>
           LastName:: <input type='text' {...bindLname}/>
            <button>Submit</button>
            </form>
        </div>
    )
}
