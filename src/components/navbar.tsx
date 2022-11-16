import React from 'react'
import { Link } from "react-router-dom"
import '../css/navbar.css'
const navbar = () => {
  return (
    <div>
    <nav className='navbar-wrapper'>
        <div className='navbar-home'>
        <Link className='navbar-option' to='/'> Home </Link>
        </div>
        <div className='navbar-kontakt'>
        <Link className='navbar-option' to='/kontakt'> Kontakt </Link>
        </div>
        <div className='navbar-ommig'>
        <Link className='navbar-option' to='/ommig'> Om mig </Link> 
        </div>
        <div className='navbar-projekt'>
        <Link className='navbar-option' to='/projekt'> Mina Projekt </Link> 
        </div>

            
            
    </nav>


    </div>
  )
}

export default navbar