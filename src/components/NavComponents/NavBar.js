import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navBar'>
        <Link to='/' className='navitem'>Home page</Link>
        <Link to='/About' className='navitem'>About</Link>
        <Link to='/Products' className='navitem'>Products</Link>
        <Link to='/Users' className='navitem'>Users</Link>
      </nav>
    );
  };
  export default NavBar;
  