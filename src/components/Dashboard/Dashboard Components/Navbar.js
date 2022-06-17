import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='flex'>
      <h2>Overview</h2>
      <h2>|</h2>
      <Link to='/users'><h2> User List</h2></Link>
      <h2>|</h2>
      <Link to='/'><h2>Sign Out</h2></Link>
      </div>
      <div className='timeline'>
        <span>Last 30 Days</span>
        <BiChevronDown />
      </div>
    </div>
  );
}
