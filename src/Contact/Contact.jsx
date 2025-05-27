import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            await emailjs.send(
                "service_gayidi8",
                "template_5ojnv3o",
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                "ouwkvMBylPBbtzzgG"
            );
            setStatus("Message sent ✅");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("Failed to send ❌");
        }
    };

    return (
        <section className="w-full py-16 px-6 ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

                {/* LEFT SIDE: Introduction Panel */}
                <div className="md:w-1/2 w-full bg-yellow-100 dark:bg-black/50 p-8 rounded-lg shadow-md text-center md:text-left">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-200 via-cyan-300 to-blue-400 mb-4">Let’s Connect!</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        I’m always open to discussing frontend work, React projects, or just chatting about web development.
                        <br />Let’s build something awesome together!
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        📬 Or reach out directly: <br />
                        <span className="font-medium">akshyas818@gmail.com</span><br />
                        <span className="font-medium">+91-8545005761</span>
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1BqRTbyzS9yHPP16M4SqJNvm0ErNYvhfI/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition"
                    >
                        Resume
                    </a>
                </div>


                {/* RIGHT SIDE: Contact Form */}
                <div className="md:w-1/2 w-full bg-white dark:bg-black/40 p-8 rounded-lg shadow-xl backdrop-blur-xl">
                    <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-br from-emerald-200 via-cyan-300 to-blue-400">Contact Me</h2>
                    <p className="text-center mb-8">Thanks for reaching out to my profile.</p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded border border-gray-300 dark:border-white bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded border border-gray-300 dark:border-white bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                value={form.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded border border-gray-300 dark:border-white bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white font-semibold py-3 rounded hover:bg-yellow-600 transition"
                        >
                            Send Message
                        </button>

                        {status && <p className="text-center mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Contact;
