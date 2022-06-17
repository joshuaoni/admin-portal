import React from 'react';

const Search = ({uponTyping, filterUsersStatus, filterUsersLastSeen}) => {
    return (
        <div className='search'>
            <div className='flex justify-end'>
                <h3>Filter By:</h3>
            </div>
            <div className='search-cont'>
                <div>
                    <input 
                        placeholder="Search..." 
                        type="text"
                        onChange={(e)=>{
                            uponTyping(e)
                        }}
                    />
                </div>
                <div className='filters'>
                    <h3 className='none'>Filter By:</h3>
                    <div><label>Active Status</label>
                    <input 
                        type='checkbox' 
                        id='status' 
                        onClick={()=>{
                            filterUsersStatus()
                        }}
                    />
                    <label>Dormant Accounts</label>
                    <input 
                        type='checkbox' 
                        id='last-seen' 
                        onClick={()=>{
                            filterUsersLastSeen()
                        }}
                    /></div>
                </div>
            </div>
        </div>
    );
}
 
export default Search;