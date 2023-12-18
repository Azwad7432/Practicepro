import React, { useState } from 'react'
import Layout from '../Component/layout/Layout';
import Categories from '../Component/Categories';

export default function Home() {
  let [data,setData] = useState(Categories);
  function filterResult(item)
  {
    console.log(item);
    const new_items = Categories.filter((values)=>{
           return item===values.category
    })
    console.log(new_items);
    setData(new_items)
  }
  return (
    <Layout>
      <div className='container-fluid'>
      <div className='row my-4'>
        <div className='col-md-4 text-center'>
          <ul className="list-group">
            <li className="list-group-item active" onClick={()=>filterResult("Men")}>Men</li>
            <li className="list-group-item" onClick={()=>filterResult("Women")}>Women</li>
            <li className="list-group-item" onClick={()=>filterResult("Shirts")}>Shirts</li>
            <li className="list-group-item" onClick={()=>setData(Categories)}>All</li>
            </ul>
            </div>
          <div className="col-md-8">
            <div className="row">
              {data.map((cat, i) => (

                <div className="col-md-4 my-2">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={cat.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Title : {cat.title.toUpperCase()}</h5>
                      <p class="card-text">
                        Price : {cat.price} <br />
                        Category : {cat.category}
                      </p>
                      <button to="#" class="btn btn-primary">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
