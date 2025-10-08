import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>K.O.P.</h1>
        <ul>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/products/search">SEARCH</NavLink>
            <NavLink to="/my-cart">CART</NavLink>
        </ul>
    </header>
  )
}

export default NavBar