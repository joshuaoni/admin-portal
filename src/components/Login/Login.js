import React from 'react';
import './Login.css';
import login from '../../assets/login.PNG';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className='login'>
            <div className='cont'>
                <div className='img'>
                    <img alt='' src={login} />
                </div>
                <div>
                    <div className='form'>
                        <form>
                            <div className='admin'>
                                <h2>ADMIN</h2><FontAwesomeIcon className='' icon={faUser} size="1x" />
                            </div>
                            <input placeholder='Email Address *'/>
                            <input placeholder='Password *'/>
                            <div className='flex justify-end'><p>Forgot Password?</p></div>
                            <Link to='/dashboard'><button>Login</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;