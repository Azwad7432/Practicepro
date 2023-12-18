import React from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import view1 from './view1.jpg'

export default function View() {
    let [username,setUsername] = useState("")
    let [email,setEmail] = useState("")
  
    const {id} =useParams();
    async function getDetails()
    {
     const {data} = await axios.get(`http://localhost:3333/posts/${id}`)
     console.log(data.username);
     setUsername(data.username)
    setEmail(data.email)
    }
    useEffect(()=>{
        getDetails()
    },[])
  return (
    <Layout>
  <div className="card mx-auto my-3" style={{width: '25rem'}}>
  <img src={view1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> Name: {username.toUpperCase()}</h5>
    <h5 className="card-title"> Email: {email}</h5>
    </div>
</div>
</Layout>
  )
}
