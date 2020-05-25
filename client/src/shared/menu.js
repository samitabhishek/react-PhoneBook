import React from 'react'
     
import { BrowserRouter as Router , NavLink } from 'react-router-dom';

export default function Menu() {
    return(
        <>
        <nav className="navbar navbar-expand navbar-dark bg-secondary">
  <ul className="nav navbar-nav">
    <li className="nav-item text-center"> <h2 className="">React PhoneBook</h2></li>

  
                    
  </ul>
</nav>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
  <ul className="nav navbar-nav">
    <li className="nav-item active">
      <NavLink className="nav-link" to="/create">Create Contact</NavLink>
    </li>

    <li className="nav-item active">
      <NavLink className="nav-link" to="/">Display Contact</NavLink>
    </li>
                    
  </ul>
</nav>
        </>
    )
    
};
