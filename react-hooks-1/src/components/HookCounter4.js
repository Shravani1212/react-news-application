import React ,{useState} from 'react'

export const HookCounter4 = () => {
    const [items,setItems]=useState([])
    const addItem=()=>{
        let n=Math.ceil(Math.random()*10)+1//gives random numbers between 1 to 10
        setItems([...items,n])
    }

    return (
        <div>
            <button onClick={addItem}>Add a Number to teh array</button>
            {console.log(items)}
            
            <ul>
                {
                    items.map(ele=><li>{ele}</li>)
                }
            </ul>
        </div>
    )
}
