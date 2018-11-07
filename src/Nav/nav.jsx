import React from 'react'
import logo from '../logos/logoripo_DIIVE_logo1.svg'
export default props => (
    
<div class="navbar">
    <a href="#" className="toggle" id="navHamburger">
        <i className="fas fa-bars"></i>
    </a>
    <a href="#" className="brand"><img src={logo}></img></a>
    <div class="right">
        <a href="/#flex" className="link">diive</a>
        <a href="/#wcsau" className="link">for company</a>
        <a href="/#instagram" className="link">about</a>
        <a href="/#" className="link">where to buy</a>
        <div className='buy_now'>BUY NOW</div>
        <i className="fas fa-shopping-bag"></i>
    </div>
    
</div>
    
)