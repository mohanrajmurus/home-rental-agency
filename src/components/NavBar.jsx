import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg';
const NavBar = () => {
  const menuItems = ['Home','LandLord','Tenants','Contact'];
  return (
    <nav className='nav'>
          <div className='nav__logo'>
            <img src={logo} alt='home-agency' />
          </div>
          <ul className='nav--menu'>
            {menuItems.map((item,i) => {
              return (
                <li className='nav--menu__items' key={i}>
                <NavLink to={item === 'Home'?'/':`${item.toLowerCase()}`} className={({isActive})=>isActive?'active':undefined}>{item}</NavLink>
              </li>
              )
            })}
            {/* <li className='nav--menu__items'>
              <NavLink to={'/'} className={({isActive})=>isActive?'active':undefined}>Home</NavLink>
            </li>
            <li className='nav--menu__items'>
              <NavLink to={'/landlord'}
              className={({isActive})=>isActive?'active':undefined}
              >LandLord</NavLink>
            </li>
            <li className='nav--menu__items'>
              <NavLink to={'/tenants'}
              className={({isActive})=>isActive?'active':undefined}
              >Tenants</NavLink>
            </li>
            <li className='nav--menu__items'>
              <NavLink to={'/contact'}
              className={({isActive})=>isActive?'active':undefined}>Contact Us</NavLink>
            </li> */}
          </ul>
        </nav>
  )
}

export default NavBar