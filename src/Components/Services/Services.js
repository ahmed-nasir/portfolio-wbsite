import React from 'react'
import './Services.css'
import HeartEmoji from "..//../img/heartemoji.png"
import Glasses from "..//../img/glasses.png"
import Humble from "..//../img/humble.png"

export const Services = () => {
    return (
        <div className="services">
            {/* Left side */}
            <div className="awsome">
                <span>My Awsome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur, iure dolore sapiente vero quidem voluptatum voluptas,
                    <br />
                    officiis assumenda nemo quam nam asperiores eos ratione ex similique sed libero modi!
                </span>
                <button className='button s-button'>Download CV</button>
                <div className='blur s-blur' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                I am the right
            </div>
        </div>
    )
}
