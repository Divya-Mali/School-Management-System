import React from 'react';
import banner  from '../assets/banner.jpg';
import '../styles/Navbar.css'

function about() {
    return(
        <div className='home'>
       <img src={banner} alt='logo' height="100%" width="100%"></img>
    </div>
    )
    
  }
  
  export default about