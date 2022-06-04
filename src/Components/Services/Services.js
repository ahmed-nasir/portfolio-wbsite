import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './Resume.pdf'

export const Services = () => {
    return (
        <div className="services">
            {/* Left side */}
            <div className="awsome">
                <span>My Awsome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur,
                    <br />
                    officiis assumenda eos ratione ex similique sed libero modi!
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                {/* 1st */}
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Photoshop, Adobe, Adobe Xd'}
                    />
                </div>
                {/* 2nd */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, Css, Javascript, React'}
                    />
                </div>
                {/* 3rd */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/Ux'}
                        detail={'Figma, Sketch, Photoshop, Adobe, Adobe Xd'}
                    />
                </div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}
