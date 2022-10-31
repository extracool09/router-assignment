import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navBar'>
        <Link to='/'>Home page | </Link>
        <Link to='/About'>About page | </Link>
        <Link to='/Products'>Products | </Link>
        <Link to='/Users'>Users</Link>
      </nav>
    );
  };
  export default NavBar;
  