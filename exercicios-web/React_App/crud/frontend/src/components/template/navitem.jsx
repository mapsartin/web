import React from 'react';
import './navitem.css'
import { Link } from 'react-router-dom';

const NavItem = props =>
    <nav className="navitem">
        <Link to= "/" >
            <i className={`fa fa-${props.icon}`}></i> <strong>{props.title}</strong>
        </Link>
        <Link to= "/users">
           <i className={`fa fa-${props.user}`}></i> <strong>Usuários</strong>
       </Link>

   </nav>

export default NavItem


    // < a href = "#/" >
    //     <i className={`fa fa-${props.icon}`}></i> <strong>{props.title}</strong>
    // </a >
    // <a href="#/users">
    //     <i className={`fa fa-${props.user}`}></i> <strong>Usuários</strong>
    // </a>
