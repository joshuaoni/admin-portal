import React from 'react';
import Sidebar from '../Dashboard/Dashboard Components/Sidebar';
import List from './User Components/List';
import './Users.css';

const Users = () => {
    return (
        <div className='users'>
            <Sidebar />
            <List />
        </div>
    );
}
 
export default Users;