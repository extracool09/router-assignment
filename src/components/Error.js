import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <section className='err'>
        <h2>404</h2>
        <p>Page not found</p>
        <Link to='/' className='btn'>Back to Home Page</Link>
      </section>
    );
  };
  export default Error;  