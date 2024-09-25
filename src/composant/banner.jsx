
import React from 'react';
import logo from '../assets/logo.png'
import '../App.css';
const Banner = () => {
  return (
    <div className='container-fluid d-flex justify-content-end border border-danger p-2 border-4 '>
      <img src={logo} alt='La maison jungle' className='image' />
      <h2 className='fs-4'>La maison jungle</h2>
    </div>
  );
};

export default Banner;