import React from 'react'
import Layout from '../Component/layout/Layout'

export default function Pagenotfound() {
  return (
    <Layout>
      <div style={{display:"flex",justifyContent:'center',flexDirection:"column",alignItems:"center"}} className='my-5'>
      <h1 style={{fontSize:'10em'}}>404</h1>
      <h3>OOPS! Page not found!</h3>
      </div>
    </Layout>
  )
}
