import React from "react";
import aps from "../assets/aps.jpg"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

function Home() {
    return (

        <div className="bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c]
  text-white">
            <Navbar />
            <section id="hero">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            {/* <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <section id="skills">
                <Skill />
            </section>
            <section id="projects">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
            </div> */}
            <section id="skills">
                <Skill />
            </section>
            <section id="projects">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
}
export default Home;