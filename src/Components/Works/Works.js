import React from 'react';
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'


const Works = () => {
    return (
        <div className="works">
            {/* Left side */}
            <div className="awsome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur,
                    <br />
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur,
                    <br />
                    sit amet consectetur adipisicing elit. Impedit consequuntur,
                    <br />
                    officiis assumenda eos ratione ex similique sed libero modi!
                </span>

                <button className='button s-button'>Haire me</button>

                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* Right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;