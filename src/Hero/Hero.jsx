import React from "react";
import aps from "../assets/aps.jpg";

const Hero = () => {
    return (
        <section className=" w-full h-220 py-6  text-white flex items-center"  >
            <div className="w-full p-60 flex flex-col md:flex-row items-center justify-between gap-10">

                <div className="basis-1/2 flex justify-center">
                    <img
                        src={aps}
                        alt="Akshya"
                        className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition duration-300"
                    />
                </div>


                <div className="basis-1/2 text-center md:text-left space-y-6">
                    <h3 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
                        Hi, I'm Akshya Singh{" "}
                        <span className="inline-block animate-waving-hand" style={{ background: "none", color: "#FFB400" }}>
                            👋
                        </span>
                    </h3>

                    <p className="text-2xl text-gray-200 font-semibold tracking-wide">
                        Frontend Developer · React & Redux Specialist · Node.js Enthusiast
                    </p>

                    <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                        I craft <span className="text-emerald-300 font-medium">responsive</span> and <span className="text-cyan-300 font-medium">scalable</span> web applications using <strong>React, Redux, JavaScript</strong>, and <strong>Tailwind CSS</strong>.
                        With a solid foundation in frontend architecture and a growing proficiency in <strong>Node.js</strong>, I focus on delivering <span className="text-blue-300 font-medium">seamless user experiences</span> and <span className="text-blue-200 font-medium">efficient client-server interactions</span>.
                        <br />
                        Passionate about <strong>clean code</strong>, <strong>modern UI practices</strong>, and <strong>continuous learning</strong> in the evolving web development landscape.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;