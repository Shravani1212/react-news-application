import React,{useState,useReducer, useEffect} from 'react'
import axios from 'axios'
   
    
export const DataFetchingTwo = () => {
 const initialState=useState({
        loading:true,
        err:'',
        post:{}
    })
    const reducer=(state,action)=>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return{
                    loading:false,
                    err:'',
                    post:action.payload

                }
                case 'FETCH_FAIL':
                return{
                    loading:false,
                    err:'Something Went Wrong',
                    post:{}

                }
                default:
                    return state
                    
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_FAIL'})
        })
    },[])
    return (
        <div>
            {state.loading?"Loading":state.post.title}
            {state.err?state.err:'Loading'}
        </div>
    )
}
