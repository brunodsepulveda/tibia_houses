import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-4'>
      <Link to='/' className='navbar-brand'>
        <i className='fas fa-home mr-1'></i> TibiaHouses
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarContent'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarContent'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
