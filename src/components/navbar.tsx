import React from 'react'
import { Link } from "react-router-dom"
import '../css/navbar.css'
const navbar = () => {
  return (
    <div>
    <nav className='navbar-wrapper'>
        <div className='navbar-home'>
        <Link className='navbar-option' to='/'><button className='navbar-btn'>HEM</button></Link>
        </div>
        <div className='navbar-ommig'>
        <Link className='navbar-option' to='/ommig'><button className='navbar-btn'> OM MIG</button></Link> 
        </div>
        <div className='navbar-projekt'>
        <Link className='navbar-option' to='/projekt'><button className='navbar-btn'> MINA PROJEKT</button></Link> 
        </div>
        <div className='navbar-kontakt'>
        <Link className='navbar-option' to='/kontakt'><button className='navbar-btn'>KONTAKT</button></Link>
        </div>

            
            
    </nav>


    </div>
  )
}

export default navbar