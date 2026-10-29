import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HERO_TITLES } from "../../constants";

export function HeroSection() {
    return (
        <section id="home" className="px-6 pt-8 pb-12 bg-gradient-to-b from-white via-white to-blue-50">
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-[15rem_minmax(0,1fr)] items-start">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="profile_picture.png"
                        alt="Profile picture of Raul Mureșan"
                        className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-2 border-blue-500 shadow-[0px_4px_10px_0px_rgba(0,0,255,0.5)]"
                    />
                    <div className="flex items-center space-x-5">
                        <a href="https://github.com/raul-muresan03" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/raul-c%C4%83lin-mure%C8%99an-60598b197/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-gray-500 hover:text-blue-600 transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="min-w-0 text-left">
                    <h1 className="text-3xl md:text-5xl font-display font-extrabold mb-4">
                        Hey, I'm <br />
                        <span className="text-blue-500">&lt;/Raul Mureșan&gt;</span>
                    </h1>
                    <div className="font-bold text-2xl md:text-4xl space-y-2">
                        {HERO_TITLES.map((title) => (
                            <p key={title}>{title}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
