import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      document.querySelector(".cursor").animate(
        {
          left: e.pageX + "px",
          top: e.pageY + "px",
        },
        { duration: 500, fill: "forwards" }
      );
    });

    document.querySelectorAll(".hover-text").forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        document.body.style.cursor = "none";
        document.querySelector(".cursor").animate(
          {
            width: "4rem",
            height: "4rem",
          },
          { duration: 400, fill: "forwards" }
        );
      });

      element.addEventListener("mouseleave", (e) => {
        document.body.style.cursor = "default";
        document.querySelector(".cursor").animate(
          {
            width: "1.25rem",
            height: "1.25rem",
          },
          { duration: 400, fill: "forwards" }
        );
      });
    });

    document.querySelectorAll(".hover-img").forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        document.querySelector(".cursor").animate(
          {
            width: "4rem",
            height: "4rem",
          },
          { duration: 400, fill: "forwards" }
        );
      });

      element.addEventListener("mouseleave", (e) => {
        document.querySelector(".cursor").animate(
          {
            width: "1.25rem",
            height: "1.25rem",
          },
          { duration: 400, fill: "forwards" }
        );
      });
    });
  });
  return (
    <>
      <div
        className={`cursor max-sm:hidden z-50 h-5 w-5 rounded-full -top-10 -left-10 -translate-x-1/2 -translate-y-1/2 mix-blend-difference pointer-events-none bg-heading absolute`}
      ></div>
    </>
  );
};

export default Cursor;
