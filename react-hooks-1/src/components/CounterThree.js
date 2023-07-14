import React, { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment' :
            return  state+1
            break
            case 'decrement' :
                
                return {state:state-1}
                break
                case 'reset' :
                    return initialState
                    break
                default:
                    return state
    }
}
export const CounterThree = () => {
    const [count,dispatch]=useReducer(reducer,initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
    return (
        <div>
            Count--{count}
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>
                CountTwo{countTwo}
            </div>
            <button onClick={()=>dispatchTwo('increment')}>Increment2</button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement2</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset2</button>
        </div>
    )
}
