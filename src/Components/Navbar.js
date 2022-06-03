import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Nasir</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button">Contact us</button>
        </div>
    </div>
  )
}

export default Navbar