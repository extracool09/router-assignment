import React from 'react';
import { Link } from 'react-router-dom';



const Error = () => {
    return (
      <section className='ErrorPage' id='err'>
        <h2 className='err'>404</h2>
        <p className='errp'>Page not found</p>
        <Link to='/' className='btn'>Back to Home Page</Link>
      </section>
    );
  };
  export default Error;  