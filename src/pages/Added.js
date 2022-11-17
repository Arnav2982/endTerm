import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Datalists from './Datalist';
import '../styles/added.css';


export default function Added() {
  let history=useNavigate();
  history('/home');

  return (
    <div className='background'>
    <h1>Here is your list!</h1>
    <div className='tablecard'>
      <table className='center'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {
            Datalists.map((item)=>{
              return(
                <tr>
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>
      <div><Link to={"/"}><button>Go Back</button></Link></div>
    </div>
  )
}