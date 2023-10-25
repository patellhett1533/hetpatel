import React from "react";
import photo from "../assets/het.jpg";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <section className="about min-h-screen overflow-hidden w-full px-10">
      <div className="h-full md:my-16 my-28 overflow-hidden">
        <div className="mb-16 overflow-hidden">
          <p className="about-semi md:w-2/5 w-full text-title text-2xl break-all hover-text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I'm Het Patel, an
            enthusiastic and dedicated MERN Stack developer entering the world
            of Technology to gain valuable experience and contribute top-quality
            solutions to my clients.
          </p>
        </div>
        <div className="photo flex items-center overflow-hidden flex-col transition-all delay-200">
          <img
            src={photo}
            alt="het"
            className=" md:w-96 w-64 hover-img  rounded-xl transition-all"
          />
          <Marquee
            pauseOnHover={true}
            speed={100}
            className="about-marque md:-mt-10 -mt-4 md:text-8xl text-4xl font-display overflow-hidden texzt-heading hover-text"
          >
            &nbsp;HET PATEL ●
          </Marquee>
        </div>
        <div className="mt-16 overflow-hidden">
          <p className="about-semi2 md:w-2/5 w-full text-title text-2xl break-all float-right hover-text">
            My unwavering commitment is to meet and exceed client expectations
            by tailoring my services to their unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
