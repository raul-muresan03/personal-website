"use client"

import { useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export function Contact() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("raulmuresancalin@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section id="contact" className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <p className="text-lg mb-4">For any questions or collaboration, you can contact me at:</p>


                {/*email*/}
                <div className="flex justify-center items-center space-x-4 mb-4">
                    <a href="mailto:raulmuresancalin@gmail.com" className="text-blue-500 hover:underline">
                        raulmuresancalin@gmail.com
                    </a>
                    <button
                        onClick={copyToClipboard}
                        className="text-red-600 text-2xl hover:scale-110 transition-transform flex items-center space-x-2"
                    >
                        <FaEnvelope />
                        {copied &&
                            <span className="text-green-500 text-sm">
                                Copied in clipboard!
                            </span>
                        }
                    </button>
                </div>




                {/*social links*/}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/raul-c%C4%83lin-mure%C8%99an-60598b197/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 text-3xl hover:scale-110 transition-transform"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/raul-muresan03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 text-3xl hover:scale-110 transition-transform"
                    >
                        <FaGithub />
                    </a>

                </div>
            </div>
        </section>
    )
}