import React, { useState } from 'react'
import Layout from './layout/Layout'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'; 
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [data,setData] = useState({
    username:"",
    email:"",
    password:""
  });
  const navigate = useNavigate()
  const handleChange = (e)=>{
    // console.log(e.target.value);
    setData({...data,[e.target.name]:e.target.value})

  }
  function handleSubmit(e)
  {
    e.preventDefault()
    console.log(data);

    if(!data.username)
    {
      toast.error("Name is required!");
    }
    else if(!data.email)
    {
      toast.error("Email is required!");
    }
    else if(!data.password)
    {
      toast.error("Password is required!");
    }
     else{
    fetch(`http://localhost:3333/posts`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    setData({username:"",email:"",password:""})
    toast.success("User Registered Successfully!",{autoClose:1000})
    setTimeout(()=>{
      navigate("/read")
    },2000)
    
  }
    
  }
  return (
    <Layout>
         <h3 className='bg-dark text-white p-3 text-center my-5'>Registration Form</h3>
        <div className='row my-5'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input type="text" name="username" id="exampleusername"
           placeholder="Enter username"
           value={data.username} 
           onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail"
           placeholder="Enter email id"
           value={data.email}
           onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" 
          placeholder="Enter password"
          value={data.password} 
          onChange={handleChange}/>
        </FormGroup>
        
        <Button className='w-100' color='success' >Submit</Button>
      </Form>
            </div>
            <div className='col-md-4'></div>
       </div>
        </Layout>
  )
}
