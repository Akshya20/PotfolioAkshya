import qkart1 from "../assets/qkart1.png";
import docbok from "../assets/docbok.png"
import botai from "../assets/botai.png"
import expense from "../assets/expense.png"


const skills = [
    { name: "Medify", link: "https://expensetracker-bay.vercel.app/", img: docbok },
    { name: "BOT.AI", link: "https://bot-ai-beryl.vercel.app/", img: botai },
    { name: "Qkart", link: "https://qkart-chi-five.vercel.app/", img: qkart1 },
    { name: "Expense Tracker", link: "https://expense-tracker-henna-delta-87.vercel.app/", img:expense  }

];

function Project() {
    return (
        <section className="w-full py-16 px-6 text-gray-900 dark:text-white ">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-200 via-cyan-300 to-blue-400 mb-10">PROJECTS</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <a
                            key={index}
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div
                                className="bg-white/10 dark:bg-black/25 backdrop-blur-lg p-6 rounded-xl shadow-md flex flex-col items-center justify-center space-y-3 transition transform hover:scale-105 hover:shadow-lg"
                            >
                                <img src={skill.img} alt={skill.name} className="w-50 h-50 object-contain" />
                                <div className="text-3xl font-semibold text-white">{skill.name}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;