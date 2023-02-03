import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const NavBar = () => {
  const [isopen, setOpen] = useState(true);
  const menuItems = ['Home','LandLord','Tenants','Contact'];
  return (
    <nav className='nav'>
          <div className='nav__logo'>
            <img src={logo} alt='home-agency' />
          </div>
          <ul className={isopen?'nav--menu':'mobile__menu'}>
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
          <span className='menubar' 
          onClick={()=> setOpen(!isopen)}>
            {isopen?<AiOutlineMenu/>:<AiOutlineClose />}
          </span>
        </nav>
  )
}

export default NavBar