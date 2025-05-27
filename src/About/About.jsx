import react from "react";

function About() {
    return (
        <section className="w-full text-gray-900 dark:text-white py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-8">
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-200 via-cyan-300 to-blue-400">ABOUT</h3>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="text-lg leading-relaxed text-justify bg-black/20 p-6 rounded-lg shadow-xl backdrop-blur-md">
                    <p className="mb-4">
                        I’m a detail-oriented Frontend Developer with a strong foundation as an SDET, bringing over 2 years of experience in quality-driven software development at Wipro. My background in SDET has sharpened my skills in ensuring high usability, performance, and reliability — expertise I now leverage to build clean, efficient, and user-focused web applications using modern frontend technologies.
                    </p>
                    <p className="mb-4">
                      I have developed hands-on expertise in modern web technologies including React, JavaScript, HTML/CSS, Redux, Node.js, Express, and RESTful APIs. I’ve built collaborative, real-time interfaces using Socket.io, and consistently apply best practices in responsive design and component architecture to deliver scalable and maintainable applications.
                    </p>
                    <p className="mb-4">
                        Transitioning into development, I have built responsive projects like <strong>Medify</strong> and <strong>BOT.AI</strong> using React,
                        Material UI,Swiper.js and JavaScript, reflecting my commitment to clean, efficient, and user-centric applications.
                    </p>
                    <p>
                        My unique path from QA to frontend development enables me to approach problems holistically — from both a user and a developer perspective. I'm now seeking frontend or full-stack developer roles where I can contribute to impactful projects and continue growing as a software engineer.
                    </p>
                </div>
            </div>
        </section >
    );
}


export default About;