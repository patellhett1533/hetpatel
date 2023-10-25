import React from "react";
import LinkIcon from "../icons/LinkIcon";

const Contact = () => {
  return (
    <section className="min-h-screen w-full md:px-10 sma:px-7 px-4 pt-12">
      <div className="h-screen flex flex-col justify-between py-4">
        <div className="mb-16">
          <p className="font-display ld:text-8xl md:text-6xl sm:text-4xl text-3xl leading-normal hover-text">
            Let's Connect
          </p>
        </div>
        <div className="w-full list-none md:px-28 sm:px-16 px-8">
          <li className="w-full flex items-center mb-16 justify-start">
            <a
              href="mailto:hettptl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-5xl text-3xl font-primary2 border-b md:w-3/5 w-full py-3 flex items-center justify-between hover-text"
            >
              Email
              <LinkIcon />
            </a>
          </li>
          <li className="w-full flex items-center mb-16 justify-end">
            <a
              href="https://www.linkedin.com/in/patelhett/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-5xl text-3xl font-primary2 border-b md:w-3/5 w-full py-3 flex items-center justify-between hover-text"
            >
              Linkedin
              <LinkIcon />
            </a>
          </li>
          <li className="w-full flex items-center mb-16 justify-start">
            <a
              href="https://www.fiverr.com/het_developer"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-5xl text-3xl font-primary2 border-b md:w-3/5 w-full py-3 flex items-center justify-between hover-text"
            >
              Fiverr
              <LinkIcon />
            </a>
          </li>
          <li className="w-full flex items-center mb-16 justify-end">
            <a
              href="https://www.upwork.com/freelancers/~019d6cd51e1d73002a"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-5xl text-3xl font-primary2 border-b md:w-3/5 w-full py-3 flex items-center justify-between hover-text"
            >
              Upwork
              <LinkIcon />
            </a>
          </li>
        </div>
        <div className="flex items-center justify-between border-t border-border py-8">
          <p className="sm:text-xl text-lg font-primary2 text-title hover-text">
            All Rights Are Reserved &copy; 2023
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
