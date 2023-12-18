import React from 'react'
import Layout from './layout/Layout'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'; 
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Update() {
  let [username,setUsername] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate = useNavigate()
  const {id} = useParams()
  async function getDetails()
  {
    const {data} = await axios.get(`http://localhost:3333/posts/${id}`)
    setUsername(data.username)
    setEmail(data.email)
  }
  useEffect(()=>{
    getDetails()
  },[])

  // ========== UPDATE FUNCTION===========
  const handleUpdate = async (e)=>{
    e.preventDefault()
    if(!password)
    {
      toast.error("Password is required!")
    }
    else
    {
      await axios.put(`http://localhost:3333/posts/${id}`,{username,email,password})
      toast.success("Record updated successfully!",{autoClose:1000})
      setTimeout(()=>{
      navigate('/read')
      },2000)
    }
    
  }
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
        
        <Button className='w-100' color='success' onClick={handleUpdate} >Update</Button>
      </Form>
            </div>
            <div className='col-md-4'></div>
       </div>

    </Layout>
)
}
