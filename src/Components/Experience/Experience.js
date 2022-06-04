import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div className="experience">
            <div className="achievement">
                <div className="circle">6+</div>
                <span>months</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">12+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle">5+</div>
                <span>companies</span>
                <span>work</span>
            </div>
        </div>
    );
};

export default Experience;