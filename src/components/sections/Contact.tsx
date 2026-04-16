import { useState } from "react";
import { FaEnvelope, FaCheck } from "react-icons/fa";

export function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "raulmuresancalin@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tight text-gray-900 dark:text-white">
                        Let's build something <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">together</span>.
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                        I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <div className="relative inline-block">
                        <button
                            onClick={copyToClipboard}
                            className="group relative flex flex-col items-center justify-center p-10 md:p-16 bg-blue-50/50 dark:bg-gray-800/50 rounded-[2.5rem] border-2 border-dashed border-blue-200 dark:border-blue-900/50 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 overflow-hidden"
                        >
                            <div className="mb-6 p-5 bg-blue-500 rounded-2xl text-white shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                {copied ? <FaCheck size={32} /> : <FaEnvelope size={32} />}
                            </div>

                            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-2">
                                {copied ? "Copied Successfully" : "Get in touch"}
                            </span>

                            <span className="text-2xl md:text-3xl font-display font-semibold text-gray-900 dark:text-white tracking-tight">
                                {email}
                            </span>

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}