import React from 'react';
import { Link } from 'react-router-dom';
import Fetch from './Fetct';



const User = () => {

      return (
      <section className='section'>
        <h2>Users</h2>
       
       <div> <Fetch />
</div>
        <Link to='/' className='btn'>Home Page</Link>

      </section>
    );
  };
  export default User;