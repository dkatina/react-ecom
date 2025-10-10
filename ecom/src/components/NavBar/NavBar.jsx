import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className="site-header">
        <h1 className="brand">K.O.P.</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/products/search" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>SEARCH</NavLink>
            </li>
            <li>
              <NavLink to="/my-cart" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>CART</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default NavBar