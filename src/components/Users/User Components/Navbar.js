import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='flex'>
      <h2>User List</h2>
      <h2>|</h2>
      <Link to='/dashboard'><h2>Dashboard</h2></Link>
      <h2>|</h2>
      <Link to='/'><h2>Sign Out</h2></Link>
      </div>
    </div>
  );
}
