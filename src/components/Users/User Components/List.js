import React, {useState} from 'react';
import Navbar from './Navbar';
import Search from './Search';
import People from './People';

const List = () => {
    const people = [
        {
            name: "Ayo",
            status: 'Active',
            seen: '0 Hours',
            stack: 'React'
        },
        {
            name: "Hillary",
            status: 'Active',
            seen: '0 Hours',
            stack: 'Python'
        },
        {
            name: "Seun",
            status: 'Active',
            seen: '0 Hours',
            stack: 'React'
        },
        {
            name: "Daniel",
            status: 'Active',
            seen: '0 Hours',
            stack: 'Product Design'
        },
        {
            name: "Ola",
            status: 'Disabled',
            seen: '0.5 Hours',
            stack: 'C#'
        },
        {
            name: "Idris",
            status: 'Disabled',
            seen: '1 Hour',
            stack: 'Product Design'
        },
        {
            name: "Steve",
            status: 'Disabled',
            seen: '10 Hours',
            stack: 'FORTRAN'
        },
        {
            name: "Segun",
            status: 'Disabled',
            seen: '36 Hours',
            stack: 'PHP'
        },
    ];
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState(people);


    const uponTyping = (event) => {	
        setSearch(event.target.value);
    }	

    const filteredUsers = users.filter(user => {
		return user.name.toLowerCase().includes(search.trim().toLowerCase());
	})

    const filterUsersStatus = () => {
        let element = document.getElementById('status');
        if (element.checked === true) {
            const newItem = filteredUsers.filter(user => {
                return user.status === 'Active';
            })
            setUsers(newItem);
        } else {
            setUsers(people);
        }
    }

    const filterUsersLastSeen = () => {
        let element = document.getElementById('last-seen');
        if (element.checked === true) {
            const newItem = filteredUsers.filter(user => {
                return Number(user.seen.slice(0,user.seen.length-5)) > 5;
            })
            setUsers(newItem);
        } else {
            setUsers(people);
        }
    }

    const toggleUsers = () => {
        const sortedUsers = users.slice().reverse();
        setUsers(sortedUsers);
    }

    return (
        <div className='list'>
            <Navbar />
            <Search filterUsersLastSeen={filterUsersLastSeen} filterUsersStatus={filterUsersStatus} uponTyping={uponTyping}/>
            <People toggleUsers={toggleUsers} filteredUsers={filteredUsers}/>
        </div>
    );
}
 
export default List;