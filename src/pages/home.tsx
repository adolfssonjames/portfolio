import React from 'react'
import '../css/home.css'
const home = () => {
    const logo = require('../IMG_7806.JPG');

  return (
    
    <div className='main'>
        <section>
            <h1 className='titel'>James Adolfsson</h1>
        </section>
        <img className='bild' src={logo}/>

    </div>
  )
}

export default home