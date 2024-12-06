import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to='/'>
        <h3>Ecommerce</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/chocolates`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Chocolates</NavLink>
        <NavLink to={`/category/chicles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Chicles</NavLink>
        <NavLink to={`/category/caramelos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Caramelos</NavLink>
      </div>
    </nav>
  )
}
