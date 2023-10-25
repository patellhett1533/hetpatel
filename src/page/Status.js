import React from "react";
import Marquee from "react-fast-marquee";

const Status = () => {
  return (
    <section className="min-h-screen w-full overflow-hidden md:px-16 px-8 flex items-center">
      <div className="w-full h-full my-16">
        <p className="md:text-8xl sm:text-5xl text-2xl font-display uppercase md:mb-10 leading-loose hover-text">
          Available For
          <Marquee speed={150} className="status-text">
            &nbsp;&nbsp;&nbsp;Freelance&nbsp;&nbsp;&nbsp;
          </Marquee>
          Work.
        </p>
      </div>
    </section>
  );
};

export default Status;
