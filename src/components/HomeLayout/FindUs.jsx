import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const FindUs = () => {
    return (
      <div>
        <h2 className=" font-bold mb-5">Find Us On</h2>

        <div>
          <div className="join w-full join-vertical lg:join-horizontal">
            <button className="btn bg-base-100 justify-start join-item"> <FaFacebook /> FaceBook</button>
            <button className="btn bg-base-100 justify-start join-item"> <FaTwitter /> Twitter</button>
            <button className="btn bg-base-100 justify-start join-item"> <FaInstagram /> Instagram</button>
          </div>
        </div>
      </div>
    );
};

export default FindUs;