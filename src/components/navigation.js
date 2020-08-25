import React from 'react';
import {Link, Router} from 'react-router-dom'
import {Login} from './login';
export const Navigation = (props) =>{
    return(
        <div>
            <Link to='/' id="Home">Home
            </Link>
            <Link to="/FamList" id="FamList">FamList
            </Link>
            <Link to="FamAdmin" id="FamAdmin">FamAdmin
            </Link>
            <Login history={props.history}/>
        </div>
    )
}