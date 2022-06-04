import React from 'react';
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

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
                <div className="i-icons">
                    <a href="https://github.com/ahmed-nasir"><img src={Github} alt="Github" /></a>
                    <a href="www.linkedin.com/in/nasir-ahmed-2620a4163"><img src={Linkedin} alt="Linkedin" /></a>
                    <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" /></a>

                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="glassesimoji" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} text1={'Web'} text2={'Developer'} />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} text1={'Best design'} text2={'Award'} />
                </div>
            </div>
        </div>
    );
};

export default Intro;