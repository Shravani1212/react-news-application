import React, { useState,useEffect } from 'react'
import axios from 'axios'
export const DataFetchingOne = () => {
    const [loading,setLoading]=useState(true)
    const [err,setErr]=useState('')
    const [post,setPost]=useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(res=>{
            setLoading(false)
            console.log(res.data)
            setPost(res.data)
            setErr('')
        })
        .catch(error=>{
            setLoading(false)
            setErr("Something went Wrong")
            setPost({})
            console.log(error)
        })
    })
    return (
        <div>
            {loading?"Loading":post.title}
            {err}
        </div>
    )
}
