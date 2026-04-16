import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                <div
                    className="font-display font-bold text-xl cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Raul Mureșan
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium hover:text-blue-500 transition-colors">Experience</button>
                    <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium hover:text-blue-500 transition-colors">Projects</button>
                    <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium hover:text-blue-500 transition-colors">Skills</button>
                    <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium hover:text-blue-500 transition-colors">Contact</button>
                </div>

                <div className="flex items-center space-x-5">
                    <a href="https://github.com/raul-muresan03" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/raul-c%C4%83lin-mure%C8%99an-60598b197/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                    <div className="h-5 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}