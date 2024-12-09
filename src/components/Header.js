import React from 'react'
import "../stylecss/Header.css"

function Header() {
  return (
    <header className='header'>
        <nav>
            <ul className='nav-links'>
                <li><a href='#hero'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>
        </nav>

    </header>
  )
}

export default Header
