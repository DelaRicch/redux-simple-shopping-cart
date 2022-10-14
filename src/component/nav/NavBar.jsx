import React from 'react'
import Logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt={Logo} />
        </div>
    </nav>
  )
}

export default NavBar