import React from 'react';
import logo from '../../images/Logo.svg';
import './Headers.css'


const Headers = () => {
   return (
      <nav className='header'>
         <img src={logo} alt="" />
         <div>
            <a href="/Home">Home</a>
            <a href="/Shop">Shop</a>
            <a href="/Order">Order</a>
            <a href="/About">About</a>
         </div>
      </nav>
   );
};

export default Headers;