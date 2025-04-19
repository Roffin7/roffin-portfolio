import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Certifications />
      <Footer />

      {/* Placeholder sections for scrolling */}
      {/* <section id="about" className="container py-5"><h2>About</h2></section> */}
      {/* <section id="skills" className="container py-5"><h2>Skills</h2></section> */}
      {/* <section id="projects" className="container py-5"><h2>Projects</h2></section> */}
      {/* <section id="certifications" className="container py-5"><h2>Certifications</h2></section> */}
      {/* <section id="services" className="container py-5"><h2>Services</h2></section> */}
      {/* <section id="contact" className="container py-5"><h2>Contact</h2></section> */}
    </>
  );
};

export default Home;
