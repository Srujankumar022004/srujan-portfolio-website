import { useEffect } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import ParticlesBackground from "./components/ParticlesBackground";

function App() {

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop =
        window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent =
        (scrollTop / docHeight) * 100;

      document.documentElement.style.setProperty(
        "--scroll-width",
        `${scrollPercent}%`
      );

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <>

      {/*<ParticlesBackground />*/}

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <GithubStats />

      <Education />

      <Certifications />

      <Achievements />

      <Contact />

      <Footer />

    </>

  );
}

export default App;