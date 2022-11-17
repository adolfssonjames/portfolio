import React, { useState, useEffect } from 'react';
import '../css/colortheme.css';

const Colortheme = () => {

    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme ==='dark') {
            setTheme ('light');
        } else {
            setTheme ('dark');
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