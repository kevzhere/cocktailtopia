import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import sublinks from '../pages.js';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container flex'>
        <div>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <FontAwesomeIcon icon={faCocktail} style={{ fontSize: '2rem' }}/>
          </Link>
        </div>
        <ul>
          { sublinks.map((link, index)=> {
            const { page, path } = link;
            return (<li key={index}><Link style={{ textDecoration: 'none' }} to={path}>{page}</Link></li>)})}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;