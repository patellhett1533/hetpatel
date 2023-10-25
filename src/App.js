import { useEffect, useRef, useState } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Service from "./page/Service";
import Status from "./page/Status";
import Work from "./page/Work";
import SmoothScrollbar from "smooth-scrollbar";
import { gsap, Expo } from "gsap";

function App() {
  const [counter, setCounter] = useState(0);
  const scrollContainerRef = useRef();
  useEffect(() => {
    const scrollbar = SmoothScrollbar.init(scrollContainerRef.current, {
      damping: 0.05,
    });

    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100 ? counter + 1 : (clearInterval(count), setCounter(100))
      );
    }, 250);

    const t1 = gsap.timeline();

    t1.to(".count", 0.25, {
      opacity: 0,
      duration: 0.4,
      delay: 3.5,
    })
      .to(".count-box", {
        height: 0,
        duration: 0.4,
        delay: 0.5,
        ease: Expo.easeOut,
      })
      .to(".App", {
        display: "block",
        duration: 0.4,
      });
  });
  return (
    <>
      <div className="count-box h-[100dvh] w-full bg-white flex justify-end items-end transition">
        <h1 className="count font-display text-background sm:text-7xl text-5xl sm:mx-10 mx-4 sm:my-10 my-4 transition">
          {counter}
        </h1>
      </div>
      <Cursor />

      <div
        ref={scrollContainerRef}
        className="App w-screen h-[100dvh] overflow-hidden scroll-container transition"
        style={{ display: "none" }}
      >
        <Home />
        <About />
        <Status />
        <Work />
        <Service />
        <Contact />
      </div>
    </>
  );
}

export default App;
