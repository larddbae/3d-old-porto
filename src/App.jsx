import React, { useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/3DIsland";
import Cursor from "./sections/cursor/Cursor";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <Cursor />
      <Hero />
      <About />
      <Projects />
      <section className="min-h-20"></section>
      <Experiences />
      <Home />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;