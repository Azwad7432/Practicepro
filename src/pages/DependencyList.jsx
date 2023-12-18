import React from 'react'
import Layout from '../Component/layout/Layout';
import {Form, FormGroup, Label, Input } from 'reactstrap'
import { useState } from 'react';

export default function DependencyList() {
    const countries = [
        {
          name: "India",
          states: [
            {name: "Uttrakhand",city: ["Dehradun", "Manali"]},
            { name: "Uttarpradesh", city: ["Lucknow", "Varanasi"] },
            { name: "Haryana", city: ["Gurugram", "Sonipat"] }
          ],
        },
        {
          name: "America",
          states: [
            { name: "California", city: ["daily city1","Daily city-2"]  },
            { name: "New york", city: ["White house-1","White house-2"] },
            { name: "Los anglis", city: ["Vienna-1","Vienna-2"] },
          ],
        },
        {
          name: "Sri lanka",
          states: [
            { name: "Western", city: ["Colombo-1","Colombo-2"] },
            { name: "Northern", city: ["Jaffna-1","Colombo-3" ]},
            { name: "Central", city: ["Kandy-1","Kandy-2"] },
          ],
        }
      ];
      const [country, setCountry]  =useState("")
      const [states, setStates]  =useState([])
      const [state, setState]  =useState("")
      const [cities, setCities]  =useState([])
      const [city, setCity]  =useState("")

      function changeCountry(e)
    {
        setCountry(e.target.value)
        setStates(countries.find((ctr)=>ctr.name===e.target.value).states)
    } 
    function changeState(e)
    {
        setState(e.target.value)
        setCities(states.find((cts)=>cts.name===e.target.value).city)
    }
    function changeCity(e)
    {
        setCity(e.target.value)
        
    }    
  return (
    <Layout>
        <div className='container'>
        <h1 className='text-center'>DependencyList</h1>
        <Form>
            <FormGroup>
                <Label for='exampleSelect'>Country Name</Label>
                <Input type='select' name='select' className='w-25'
                onChange={changeCountry}>
                  <option>--Select--</option>
                   {
                    countries.map((c,i)=> <option value={c.name} key={i}>{c.name}</option>)
                   }
                 </Input>
                </FormGroup>
                <FormGroup>
                <Label for='exampleSelect'>State Name</Label>
                <Input type='select' name='select' className='w-25'
                onChange={changeState}>
                    {
                   states.map((s,i)=><option value={s.name} key={i}>{s.name}</option>)
                  }
                </Input>
                </FormGroup>
                <FormGroup>
                <Label for='exampleSelect'>State City</Label>
                <Input type='select' name='select' className='w-25'
                onChange={changeCity}>
                    {
                   cities.map((ct,i)=><option value={ct} key={i}>{ct}</option>)
                  }
                </Input>
                </FormGroup>
        </Form>
        </div>
        </Layout>
  )
}
