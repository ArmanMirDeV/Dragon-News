import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 rounded-2xl ">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded-2xl">Lates</p>
      <Marquee
        className="flex gap-8"
        pauseOnHover={true}
        gradient={true}
        speed={60}
        delay={2}
      >
        <p className="font-bold">
          UK military says ship ablaze after being struck off coast of Yemen.
        </p>
        <p className="font-bold">
          Facebook’s new feature lets its AI look at photos you haven’t uploaded
          yet.
        </p>
        <p className="font-bold">
          Samsung reportedly gives up on super-thin smartphones amid low sales.
        </p>
        <p className="font-bold">
          Facebook’s new feature lets its AI look at photos you haven’t uploaded
          yet.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
