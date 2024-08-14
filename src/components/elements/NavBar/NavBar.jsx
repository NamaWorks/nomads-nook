import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import { useEffect } from 'react'

const NavBar = () => {
  return (

    <>
    <nav>
        <div className='logo-container'>
          <h1 className='nn-logo'>NN</h1>
        </div>
        <ul className='nav-ul'>
          <li className="nav-ul-items">
            <NavLink to="/" activeClassName="active">Gallery</NavLink>
          </li>
          <li className="nav-ul-items">
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-ul-items">
            <NavLink to="/cart" activeClassName="active">Cart</NavLink>
          </li>
        </ul>
      </nav>


    </>

  )
}
export default NavBar