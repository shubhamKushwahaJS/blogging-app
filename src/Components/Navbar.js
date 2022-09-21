import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <ul className='nav-ul'>
                <li> <Link to="/Dashboard">Dashboard</Link></li>
                <li> <Link to="/Newblog">New Blog</Link></li>
                <li> <Link to="/login">Login</Link></li>
                
            </ul>
  )
}

export default Navbar;
