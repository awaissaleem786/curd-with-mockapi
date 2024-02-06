import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
 const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://65bdc82bb51f9b29e933aceb.mockapi.io/curdd", {
      e_name: name,
      e_age: age,
      e_email: email
    }).then(()=>navigate('/'))

    // You might want to handle the response or add error handling here
  };
    const goto=()=>
  {
           navigate('/')
  }
  

  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
        <div className="mt-2 mb-2 "><button className="btn btn-primary" onClick={goto}>Read Data</button></div>
          <div className='bg-primary p-4 text-center'>
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Enter Name:</label>
              <input type="text" placeholder='Name' className='form-control' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='form-group'>
              <label>Enter Age:</label>
              <input type="number" placeholder='Age' className='form-control' onChange={(e) => { setAge(e.target.value) }} />
            </div>
            <div className='form-group'>
              <label>Enter Email:</label>
              <input type="email" placeholder='Email' className='form-control' onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <br />
            <div className='d-grid'>
              <input type="submit" value='Submit' className='btn btn-primary' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create;
