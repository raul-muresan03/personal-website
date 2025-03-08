"use client"

import Typewriter from 'typewriter-effect';


export function HeroSection() {
    return (
        <section id="home" className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 ">
                    Hey, I'm
                    <br />
                    <span className="text-blue-500">
                        &lt;/Raul Mureșan&gt;
                    </span>

                </h1>
            </div>

            <div className="flex flex-col items-center">
                <img
                    src="profile_picture.png"
                    alt="profile_pic"
                    className="w-60 h-60 mr-6 ml-6 rounded-full object-cover border border-blue-500 shadow-[0px_4px_10px_0px_rgba(0,0,255,0.5)]"
                />


            </div>
            <div className="font-bold text-4xl">
                <Typewriter
                    options={{
                        strings: ['Full Stack Developer.', 'Software Engineer.', 'Tech Enthusiast.'],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                    }}
                />
            </div>
        </section>
    );
}
