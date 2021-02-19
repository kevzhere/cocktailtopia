import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import sublinks from '../pages.js';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container flex'>
        <div>Logo</div>
        <ul>
          { sublinks.map((link, index)=> {
            const { page, path } = link;
            console.log('page', page);
            return (<li key={index}><Link style={{ textDecoration: 'none' }} to={path}>{page}</Link></li>)})}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;