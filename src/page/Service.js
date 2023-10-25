import React, { useState } from "react";

function MarqueeComponent({ text }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`overflow-hidden whitespace-nowrap border md:px-5 px-2 py-1.5 md:text-xl text-sm font-display rounded-full leading-relaxed md:me-5 mb-5 ${
        isHover && "service-scroll"
      }`}
    >
      <p>{text}</p>
    </li>
  );
}

const Service = () => {
  const services = [
    "Portfolio Website",
    "Admin Pannel",
    "Business Website",
    "Frontend",
    "Dynamic Website",
    "CMS Site",
    "Web App",
  ];

  const skill = [
    "React JS",
    "Next JS",
    "Node JS",
    "Tailwind CSS",
    "Design Component",
    "HTML/CSS",
    "GSAP",
    "PHP",
    "Flutter",
  ];
  return (
    <section className="min-h-screen w-full overflow-hidden md:px-10 sm:px-6 px-4 pt-12">
      <div className="h-full my-16">
        <div className="mt-12 md:px-10 sm:px-7 px-4">
          <div className="mb-10">
            <p className="text-3xl mb-12 font-primary text-title hover-text">
              Services Which I Provide :
            </p>
            <div className=" list-none flex flex-wrap md:px-12">
              {services.map((item, index) => (
                <MarqueeComponent key={index} text={item} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-3xl mb-12 font-primary text-title hover-text">
              Skills Which I Have :
            </p>
            <div className=" list-none flex flex-wrap md:px-12">
              {skill.map((item, index) => (
                <MarqueeComponent key={index} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
