import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
      <>
        <section className='products'>
          <h2>Products</h2>
          <p>This is the Products page</p>

        <Link to='/' className='btn'>Home Page</Link>
        </section>
      </>
    );
  };
  
  export default Products;