import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playgroundImage from "../../assets/playground.png"



const Qzone = () => {
    return (
        <div className='bg-base-200 p-5'>
            <h2 className='font-bold mb-5' >QZone</h2>
            <div className="space-y-5">
                <img src={swimmingImage} alt="swimming" />
                <img src={classImage} alt="class" />
                <img src={playgroundImage} alt="playground" />
            </div>
        </div>
    );
};

export default Qzone;