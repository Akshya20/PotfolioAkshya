import {
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiMongodb,
    SiRedux,
    SiNodedotjs,
} from "react-icons/si";

const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "Nodejs", icon: <SiNodedotjs className="text-orange-500" /> },
     { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
];

function Skill() {
    return (
        <section className="w-full py-16 px-6 text-gray-900 dark:text-white ">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-200 via-cyan-300 to-blue-400 mb-10">SKILLS</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white/10 dark:bg-black/35 backdrop-blur-lg p-6 rounded-xl shadow-md flex flex-col items-center justify-center space-y-3 transition transform hover:scale-105 hover:shadow-lg"
                        >
                            <div className="text-4xl">{skill.icon}</div>
                            <p className="text-base font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;