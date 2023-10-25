import React, { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    for (let i = 0; i < document.querySelectorAll(".link-box").length; i++) {
      document
        .querySelectorAll(".link-box")
        [i].addEventListener("mousemove", (e) => {
          document.querySelectorAll(".link-img")[i].style.opacity = 1;
          document.querySelectorAll(".link-img")[i].style.transform =
            "scale(1,1)";
          document.querySelectorAll(".link-img")[i].style.left =
            e.pageX - 290 + "px";
        });
      document
        .querySelectorAll(".link-box")
        [i].addEventListener("mouseleave", (e) => {
          document.querySelectorAll(".link-img")[i].style.opacity = 0;

          document.querySelectorAll(".link-img")[i].style.transform =
            "scale(0.75, 0.75)";
          document.querySelectorAll(".link-img")[i].style.left =
            e.pageX - 290 + "px";
        });
    }
  });
  return (
    <section className="min-h-screen w-full overflow-hidden md:px-10">
      <div className="h-full md:my-16 my-28 max-sm:px-4">
        <div className="mb-16">
          <p className="md:w-2/5 w-full text-title text-3xl break-all hover-text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here's my personal and
            commercial projects to describe my strong intrest in development of
            web designs, product or website.
          </p>
        </div>
        <div className="md:px-28 sm:px-8">
          <div className="relative link-box flex items-center justify-between border-t border-border py-12 sm:px-8 px-2">
            <img
              src={require("../assets/social.png")}
              alt=""
              className="md:w-96 w-64 md:h-52 h-36 rotate-12 link-img absolute scale-x-75 scale-y-75 md:left-1/2 left-full pointer-events-none -translate-x-1/2 overflow-hidden rounded-lg transition ease-in-out opacity-0 z-30 max-sm:hidden"
            />
            <p className="text-heading sm:text-4xl text-3xl font-extra">
              Social Media Web
            </p>
            <span className="text-2xl font font-extra text-title">MERN</span>
          </div>
          <div className="relative link-box flex items-center justify-between border-t border-border py-12 sm:px-8 px-2">
            <img
              src={require("../assets/dashboard.png")}
              alt=""
              className="md:w-96 w-64 md:h-52 h-36 rotate-12 link-img absolute scale-x-75 scale-y-75 left-1/2 pointer-events-none -translate-x-1/2 overflow-hidden rounded-lg transition ease-in-out opacity-0 z-30 max-sm:hidden"
            />
            <p className="text-heading sm:text-4xl text-3xl font-extra">
              Chat Website UI
            </p>
            <span className="text-2xl font font-extra text-title">ReactJS</span>
          </div>
          <div className="relative link-box flex items-center justify-between border-t border-border py-12 sm:px-8 px-2">
            <img
              src={require("../assets/stockprice.png")}
              alt=""
              className="md:w-96 w-64 md:h-52 h-36 rotate-12 link-img absolute scale-x-75 scale-y-75 left-1/2 pointer-events-none -translate-x-1/2 overflow-hidden rounded-lg transition ease-in-out opacity-0 z-30 max-sm:hidden"
            />
            <p className="text-heading sm:text-4xl text-3xl font-extra">
              Stock Website UI
            </p>
            <span className="text-2xl font font-extra text-title">ReactJS</span>
          </div>
          <div className="relative link-box flex items-center justify-between border-t border-border py-12 sm:px-8 px-2">
            <img
              src={require("../assets/bloghome.png")}
              alt=""
              className="md:w-96 w-64 md:h-52 h-36 rotate-12 link-img absolute scale-x-75 scale-y-75 left-1/2 pointer-events-none -translate-x-1/2 overflow-hidden rounded-lg transition ease-in-out opacity-0 z-30 max-sm:hidden"
            />
            <p className="text-heading sm:text-4xl text-3xl font-extra">
              CMS Website
            </p>
            <span className="text-2xl font font-extra text-title">NextJS</span>
          </div>
          <div className="relative link-box flex items-center justify-between border-y border-border py-12 sm:px-8 px-2">
            <img
              src={require("../assets/quize.png")}
              alt=""
              className="md:w-96 w-64 md:h-52 h-36 rotate-12 link-img absolute scale-x-75 scale-y-75 left-1/2 pointer-events-none -translate-x-1/2 overflow-hidden rounded-lg transition ease-in-out opacity-0 z-30 max-sm:hidden"
            />
            <p className="text-heading sm:text-4xl text-3xl font-extra">
              Quize Website
            </p>
            <span className="text-2xl font font-extra text-title">MERN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
