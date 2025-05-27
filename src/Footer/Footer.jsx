import react from "react";


const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 fixed bottom-0 left-0 z-50 ">
      <div className=" px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Name or Logo */}
        <h2 className="text-lg font-semibold mb-4 md:mb-0 text-white">
          © 2025 Akshya. All rights reserved.
        </h2>

        {/* Right - Navigation or Social Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;