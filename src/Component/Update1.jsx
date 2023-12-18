import React from 'react'
import Layout from './layout/Layout'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Update1() {
    let [id,setId] = useState("")
   let [username,setUsername] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
    // ========GETDATA========
    function getData()
    {
     setId(localStorage.getItem("id"))
     setUsername(localStorage.getItem("username"))
    setEmail(localStorage.getItem("email"))
    }
   async function handleUpdate1()
     {
       await axios.put(`http://localhost:3333/posts/${id}`,{
        username,email,password
     })
     toast.success("Record Updated!",{autoClose:1000})
     setTimeout(()=>{
        navigate("/read")
     },2000);
     localStorage.clear()
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <Layout>
         <div className='row my-5'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <Form>
            <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input type="text" name="username" id="exampleusername"
           placeholder="Enter username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
           />
           </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail"
           placeholder="Enter email id"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" 
          placeholder="Enter password"
          vale={password}
          onChange={(e)=>setPassword(e.target.value)}
            />
        </FormGroup>
        
        <Button className='w-100' color='success' onClick={handleUpdate1} >Update1</Button>
      </Form>
            </div>
            <div className='col-md-4'></div>
       </div>
    </Layout>
  )
}
