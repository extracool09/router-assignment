import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Products from './components/Products';
import User from './components/User';
import About from './components/About';
import Shared from './components/Shared';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Shared />} > 
    <Route index element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Users' element={<User />} />
    <Route path='/Products' element={<Products />} />
    <Route path='*' element={<Error />} />
    </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App;
