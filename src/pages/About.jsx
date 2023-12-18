import React from 'react'
import Layout from '../Component/layout/Layout'
import about1 from "./about1.jpg"

export default function About() {
  return (
    <Layout>
        <div className='container-fluid'>
          <div className='d-flex justify-content-center mt-3'>
            <img src={about1} alt=''height="450px" />
            </div>
            </div>
        </Layout>
  )
}
