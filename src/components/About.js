import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
      <section className='about'>
        <h2>About</h2>
        <p>This is the about page</p>
        <Link to='/' className='btn'>Home Page</Link>
      </section>
      
    );
  };
  export default About;
  