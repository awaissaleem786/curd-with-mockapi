import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Edit = () => {

       const [id ,setId]=useState(0)
       const [name,setName]=useState('')
       const [age,setAge]=useState('')
       const [email,setEmail]=useState('')
        

       useEffect(() => {
       setId(localStorage.getItem('id'))
       setName(localStorage.getItem('name'))
       setAge(localStorage.getItem('age'))
       setEmail(localStorage.getItem('email'))
       }, [])

       
       const handleupdate=(e)=>{
            e.preventDefault();

            axios.put(`https://65bdc82bb51f9b29e933aceb.mockapi.io/curdd/${id}`,{
                e_name:name,
                e_age:age,
                e_email:email
            }).then(()=>{
                navigate('/')
            })
       }
    const navigate=useNavigate();
  const goto=()=>
  {
           navigate('/create')
  }
  return (
    <>
    <div className='row'>
      <div className='col-md-4'>
      <div className="mt-2 mb-2 "><button className="btn btn-primary" onClick={goto}>Create Data</button></div>
        <div className='bg-primary p-4 text-center'>
          <h1>Edit Data</h1>
        </div>
        <form onSubmit={handleupdate}>
          <div className='form-group'>
            <label>Enter Name:</label>
            <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} className='form-control' />
          </div>
          <div className='form-group'>
            <label>Enter Age:</label>
            <input type="number" value={age} placeholder='Age' className='form-control' onChange={(e)=>setAge(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Enter Email:</label>
            <input type="email" value={email} placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          <br />
          <div className='d-grid'>
            <input type="submit" value='Edit' className='btn btn-primary' />
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Edit;