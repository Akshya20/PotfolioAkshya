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


                <div className="basis-1/2 text-center md:text-left space-y-4">
  <h3 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
    Hi, I'm Akshya Singh{" "}
    <span
      className="inline-block animate-waving-hand"
      style={{ background: "none", color: "#FFB400" }}
    >
      👋
    </span>
  </h3>

  <p className="text-xl text-gray-200 font-semibold tracking-wide">
    Frontend Developer · React & Redux · Node.js Enthusiast
  </p>

  <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-md">
    I build <span className="text-emerald-300 font-medium">responsive</span>, <span className="text-cyan-300 font-medium">scalable</span> web apps with <strong>React, Redux, JavaScript</strong>, and <strong>Tailwind CSS</strong>.  
    Skilled in <strong>Node.js</strong>, I focus on <span className="text-blue-300 font-medium">smooth user experiences</span> and <span className="text-blue-200 font-medium">efficient client-server flows</span>.
  </p>
</div>
            </div>
        </section>
    );
};

export default Hero;
