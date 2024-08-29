import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu, isMenuActive }) => {
    return (
        <h1 className={`header__logo ${isMenuActive ? 'menu-active' : ''}`}>
            <Link to='/'>
                <em aria-hidden='true' onClick={toggleMenu}></em>
                <span>songs<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo