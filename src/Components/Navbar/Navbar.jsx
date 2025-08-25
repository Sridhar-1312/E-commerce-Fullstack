import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="" alt="shopping logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src="" alt="Cart-icon" />
      </div>

    </div>
  )
}

export default Navbar