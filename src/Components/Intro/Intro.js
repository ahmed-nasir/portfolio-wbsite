import React from 'react';
import './Intro.css'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Nasir Ahmed</span>
                    <span>Frountend Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <button className='button i-button'>Hire me</button>
            </div>
            <div className="i-right">
                right side
            </div>
        </div>
    );
};

export default Intro;