import { NAV_LINKS } from "../../constants";

export function Navbar() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                <button
                    className="font-display font-bold text-xl cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Raul Mureșan
                </button>

                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-medium hover:text-blue-500 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
