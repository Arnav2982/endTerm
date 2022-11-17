import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/added.css';


export default function Thanks() {
  return (
    <div className='background'>
        <h1>😍Thanks for Registering!</h1>
      <div><Link to={"/"}><button>Go Back</button></Link></div>
    </div>
  )
}