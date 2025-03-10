"use client";

import Typewriter from "typewriter-effect";

export function HeroSection() {
    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-6 md:flex-row md:space-x-8">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Hey, I'm <br />
                    <span className="text-blue-500">&lt;/Raul Mureșan&gt;</span>
                </h1>
                <div className="font-bold text-2xl md:text-4xl">
                    <Typewriter
                        options={{
                            strings: ["Full Stack Developer.", "Software Engineer.", "Tech Enthusiast."],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                        }}
                    />
                </div>
            </div>

            <div className="mt-6 md:mt-0">
                <img
                    src="profile_picture.png"
                    alt="profile_pic"
                    className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border border-blue-500 shadow-[0px_4px_10px_0px_rgba(0,0,255,0.5)]"
                />
            </div>
        </section>
    );
}
