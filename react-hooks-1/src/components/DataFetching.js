import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const DataFetching = () => {
    const [posts,setPosts]=useState([])
    const [err,setErr]=useState('')
    const [id,setId]=useState(1)
    const [idBtn,setIdBtn]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
            setErr(err)
        })
    },[idBtn])
    const handleClick=()=>{
        setIdBtn(id)
    }
    return (
        <div>
            {/* List of Posts
            <ul>
                {
                    posts.length>0?posts.map(post=>(<li key={post.id}>{post.title}</li>)):null
                }
                {
                    err?"Something went wrong":null
                }
            </ul> */}
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={handleClick}>Submit</button>
            <div> {posts.title}</div>
            
        </div>
    )
}
