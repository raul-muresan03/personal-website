import { useEffect, useState } from "react";
import { FaCheck, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { EMAIL } from "../../constants";

export function HeroSection() {
    const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

    useEffect(() => {
        if (copyStatus === "idle") return;

        const timeout = window.setTimeout(() => setCopyStatus("idle"), 2000);
        return () => window.clearTimeout(timeout);
    }, [copyStatus]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopyStatus("copied");
        } catch {
            setCopyStatus("error");
        }
    };

    const copyMessage = copyStatus === "copied"
        ? "Copied Successfully"
        : copyStatus === "error"
            ? "Could not copy email address"
            : "";

    return (
        <section id="home" className="px-6 pt-8 pb-12 bg-gradient-to-b from-white via-white to-blue-50">
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-[15rem_minmax(0,1fr)] items-start">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="profile_picture.webp"
                        alt="Profile picture of Raul Mureșan"
                        className="w-40 h-48 md:w-60 md:h-72 rounded-md object-cover object-top bg-gray-100"
                    />
                    <div className="flex items-center space-x-5">
                        <a href="https://github.com/raul-muresan03" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-gray-500 hover:text-gray-900">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/raul-c%C4%83lin-mure%C8%99an-60598b197/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-gray-500 hover:text-blue-600">
                            <FaLinkedin size={20} />
                        </a>
                        <button
                            type="button"
                            onClick={copyToClipboard}
                            aria-label="Copy email address to clipboard"
                            title={copyMessage || EMAIL}
                            className="text-gray-500 hover:text-blue-600"
                        >
                            {copyStatus === "copied" ? <FaCheck size={20} /> : <FaEnvelope size={20} />}
                            <span role="status" className="sr-only">{copyMessage}</span>
                        </button>
                    </div>
                </div>

                <div className="min-w-0 text-left">
                    <h1 className="text-3xl md:text-4xl font-display font-extrabold mb-2">
                        Hello, I'm <span className="text-blue-500">Raul Mureșan</span>
                    </h1>
                    <p className="text-lg italic text-gray-600">Full Stack Developer</p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <FaMapMarkerAlt aria-hidden="true" className="shrink-0" />
                        Cluj-Napoca, Romania
                    </p>

                    <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
                        <p>
                            I build full-stack applications with Python, FastAPI, PostgreSQL, React and Next.js.
                            My projects range from an OCR-powered exam platform to a RAG application for querying financial reports.
                        </p>
                        <p>
                            My previous experience includes automating workflows at Bosch and teaching programming.
                            I'm currently looking for a Full Stack Developer role where I can build useful applications and solve practical problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
