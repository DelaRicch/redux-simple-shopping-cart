import React from 'react'
import Logo from '../../assets/logo.png'
import { BsCart4 } from 'react-icons/bs'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt={Logo} />
        </div>

        <div className="cart">
            <BsCart4 className='cart-icon' />
            <span>10</span>
        </div>
    </nav>
  )
}

export default NavBar