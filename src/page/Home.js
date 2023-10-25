import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen w-full md:px-10 sm:px-8 px-3 py-5 flex flex-col justify-center box-border">
      <div className="branding mb-4">
        <p className="text-2xl text-title font-extra w-fit hover-text">
          Het Patel
        </p>
      </div>
      <hr className="home-line" />
      <div className="role h-5/6 flex justify-center flex-col px-2 py-32 break-words">
        <p className="font-extra md:text-5xl text-3xl text-heading mb-5 hover-text w-fit">
          P a s s i o n a t e
        </p>
        <p
          id="homeText"
          className="home-text font-display md:text-8xl sm:text-6xl text-5xl text-heading leading-relaxed hover-text"
        >
          MERN Stack Developer
        </p>
      </div>
      <hr className="home-line" />
      <div className="country mt-4 overflow-hidden">
        <p className="home-semi text-2xl text-title font-extra float-right hover-text">
          Based In India
        </p>
      </div>
    </section>
  );
};

export default Home;
