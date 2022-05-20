import './nav.css'
import React from 'react'
import NavItem from './navitem'
const Nav = props => 


<React.Fragment>
    
    <aside className="menu-area">
    <NavItem {...props} />
    </aside>
</React.Fragment>


//  <aside className="menu-area">
//     <nav className="menu">        
//         <a href="#/">
//             <i className="fa fa-home"></i> Início
//         </a>
//         <a href="#/users">
//             <i className="fa fa-users"></i> Usuários
//         </a>
//         </nav>
// </aside> 

export default Nav
