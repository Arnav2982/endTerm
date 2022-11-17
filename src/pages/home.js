import React, { useState } from 'react'
import Datalists from './Datalist';
import '../styles/home.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [birthday, setbirthday] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = name, b = email, c = birthday;
    Datalists.push({ a, b, c });
    history('/thank');
  }

  return (
    <div className='background'>
      <h1>Reserve your seat</h1>
      <form className='container'>
        <label>Name</label><br></br>
        <input type="text" name='username' placeholder='Enter your name...' pattern ="^[A-Za-z0-9]{3,16}$" title="Username should be 3-16 characters and shouldn't include any special character!" onChange={(e) => setname(e.target.value)} required></input><br></br>
        <label>Email</label><br></br>
        <input type="email" name='email' placeholder='Enter your email...' title="It should be a valid email address!" onChange={(e) => setemail(e.target.value)} required></input><br></br>
        <label>Date of Birth</label><br></br>
        <input type="date" name='birthday' onChange={(e) => setbirthday(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>
      </form>
    </div>
  )
}