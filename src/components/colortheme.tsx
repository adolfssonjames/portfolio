import React, { useState, useEffect } from 'react';
import '../css/colortheme.css';

const Colortheme = () => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme ==='light') {
            setTheme ('dark');
        } else {
            setTheme ('light');
        }
    }
    useEffect(() => {
        document.body.className = theme;
      }, [theme]);
    return (
        <div >
            <button className='theme-btn' onClick={toggleTheme}>BYT FÄRGTEMA</button>
            
        </div>
    )


  
}

export default Colortheme