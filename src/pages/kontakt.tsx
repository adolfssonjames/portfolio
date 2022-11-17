import React from 'react'
import '../css/kontakt.css';

const kontakt = () => {
  return (
    <div>
        <section>
            <h1 className='titel'>James Adolfsson</h1>
        </section>
       
        <section className='kontakt-container'>
          <h1>KONTAKT</h1>
            <form className='kontakt-form'>
              <input type="email" placeholder='Din Email'/>
              <input type="email" placeholder='Din Email'/>
              <input type="email" placeholder='Din Email'/>
              <button>Skicka</button>

            </form>
            <div className='kontakt-elements'>
                <label htmlFor="Telefon">Mail</label>
                <a href="mailto:adolfssonjames@gmail.com" className='mail-link'>Maila mig här</a>
                <label htmlFor="Telefon">Telefon</label>
                <a href="tel:0737031895" className='tel'>0737031895</a>
            </div>

        </section>

    </div>
  )
}

export default kontakt