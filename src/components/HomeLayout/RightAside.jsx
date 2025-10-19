import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightAside = () => {
    return (
        <div className='space-y-10'>
            <SocialLogin />
            <FindUs/>
        </div>
    );
};

export default RightAside;