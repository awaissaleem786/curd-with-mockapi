import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [apidata, setapidata] = useState([]);
  const getdata = () => {
    axios
      .get("https://65bdc82bb51f9b29e933aceb.mockapi.io/curdd")
      .then((responce) => setapidata(responce.data))
      .catch(()=>{console.log("error")})
      
  };

  const handleDelete=(id)=>{

    console.log(id)
         axios.delete(`https://65bdc82bb51f9b29e933aceb.mockapi.io/curdd/${id}`)
         .then(()=>getdata())
  }
  useEffect(() => {
    getdata();
  }, []);
  const navigate=useNavigate();
  const goto=()=>
  {
           navigate('/create')
  }
  const setinlocalstorage=(id,name,age,email)=>{
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('age',age)
        localStorage.setItem('email',email)
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-2 mb-2 "><button className="btn btn-primary" onClick={goto}>Create Data</button></div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>Id:</th>
                <th>Name:</th>
                <th>Age::</th>
                <th>Email:</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apidata.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                     <Link to='/edit'><button className="btn btn-primary" onClick={()=>setinlocalstorage(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button></Link>
                      </td>
                      <td>
                        <button className="btn btn-danger" onClick={()=>{if(window.confirm('Are you sure want to delete???')) 
                         
                         
                         { handleDelete(item.id)}
                        
                        
                        }}>Delete</button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
