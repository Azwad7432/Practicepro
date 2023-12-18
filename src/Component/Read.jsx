import React from 'react'
import Layout from './layout/Layout'
import { Table } from 'reactstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup, Label, Input, } from 'reactstrap'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function Read() {
  const [data, setData] = useState([])
  const [dark, setDark] = useState("");
  const [search, setSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerpage = 2;
  const lastIndex = currentPage * recordPerpage;
  const firstIndex = lastIndex - recordPerpage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordPerpage);
  const numbers = [...Array(npage).keys()].slice();

  console.log(search)

  function prevPage() {
    if (currentPage !== 1)
      setCurrentPage(currentPage - 1)
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function currPage(id) {
    setCurrentPage(id)
  }

  async function getData() {
    let result = await fetch(`http://localhost:3333/posts`)
    //  console.log(result);
    let users = await result.json()
    console.log(users);
    setData(users)


  }
  useEffect(() => {
    getData()
  }, []);
  //  =========delete user records=====
  function handleDelete(id) {
    console.log(id);
    axios.delete(`http://localhost:3333/posts/${id}`)
    toast.success("Record deleted successfully", { autoClose: 1000 })
    getData()
  }
  function setToLocalStorage(id, username, email) {
    localStorage.setItem("id", id)
    localStorage.setItem("username", username)
    localStorage.setItem("email", email)
  }
  // ========GET ID=======
  //  async function getid(id)
  // {
  //     console.log(id);
  //     let {data} = await axios.get(`http://localhost:3333/posts/${id}`)
  //     console.log(data.username);
  // }


  return (
    <Layout>
      <div className="form-check form-switch my-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={() => dark === "table-dark" ? setDark("") : setDark("table-dark")}

        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          Table-dark
        </label>
      </div>

      {/* ==========Table data====== */}
      <h3>List of all candidates</h3>
      {/* ==========SEARCH BOX START========== */}
      <div className='container offset-4'>
        <Form>
          <FormGroup>
            <Input type="search"
              name="email"
              placeholder="Type here to search record"
              className="w-50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormGroup>
        </Form>
      </div>
      {/* =========SEARCH BOX END======== */}

      <div className='container'>
        <Table className={`${dark}`}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              records.filter((d) => {
                return search.toString().toLowerCase() === ""
                  ? d
                  : d.username.toString().toLowerCase().includes(search);
              }).map((d, i) => (
                <tr>
                  <th>{d.id}</th>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        if (window.confirm("Are you sure to delete"))
                          handleDelete(d.id);
                      }}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <NavLink
                      className="btn btn-success mx-2"
                      to={`/update/${d.id}`}
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </NavLink>
                    <NavLink className="btn btn-primary" to={`/view/${d.id}`}>
                      View
                    </NavLink>

                    <NavLink
                      to="/update1"
                      className="btn btn-secondary mx-2"
                      onClick={() => setToLocalStorage(d.id, d.username, d.email)}
                    >
                      Update1
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Pagination aria-label="Page navigation example" className="d-flex justify-content-center">

          <PaginationItem className={currentPage === 1 ? 'disabled' : ''}>
            <PaginationLink href="#" onClick={() => prevPage()}>Previous</PaginationLink>
          </PaginationItem>

          {
            numbers.map((n, i) =>
              <PaginationItem key={i} className={currentPage === n + 1 ? 'active' : ''}>
                <PaginationLink href="#" onClick={() => currPage(i + 1)}>
                  {n + 1}
                </PaginationLink>
              </PaginationItem>)
          }
          <PaginationItem className={currentPage === npage ? 'disabled' : ''}>
            <PaginationLink href="#" onClick={() => nextPage()}>Next</PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </Layout>
  )
}
