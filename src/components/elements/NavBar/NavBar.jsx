import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import { useEffect, useState } from 'react'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'

const NavBar = ({ titleSize, navPos, navGap, navHeight, navTop, titleBottom }) => {


  const topPos = titleBottom + "%"


  return (
    <>
    <nav
    style={{position:navPos, gap:`${navGap}rem`, height:navHeight, top:navTop}}
    >
        <div className='logo-container'>
          <h1 
          style={{fontSize:titleSize, bottom:titleBottom}}
          // style={{fontSize:titleSize}}
          className='nn-logo'
          >NN
          </h1>
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