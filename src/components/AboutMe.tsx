"use client";

export function AboutMe() {
    return (
        <section id="aboutme" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 mb-16 scroll-mt-20">
            <div className="text-center max-w-[90%] md:max-w-[60%]">
                <h1 className="text-3xl font-bold mb-8">About me</h1>
                <p className="text-lg leading-relaxed text-center">
                    <span>&gt; </span>
                    I am a <span className="font-bold text-blue-500">programming teacher</span> at
                    <span className="font-bold text-blue-500"> IT Junior</span> (June 2024 – Present), where I create engaging presentations
                    on <span className="font-bold text-blue-500">classical AI</span> and teach children programming languages such as
                    <span className="font-bold text-blue-500"> C, C++, and Python</span>.
                </p>

                <p className="text-lg leading-relaxed text-center mt-4">
                    <span>&gt; </span>
                    <span className="font-bold text-blue-500">Full Stack Developer</span> working on both
                    <span className="font-bold text-blue-500"> software (web apps and mobile apps)</span> and
                    <span className="font-bold text-blue-500"> hardware</span> (FPGA and circuits).
                </p>

                <p className="text-lg leading-relaxed text-center mt-4">
                    <span>&gt; </span>
                    3rd Year <span className="font-bold text-blue-500">Computer Science</span> student at
                    Technical University of Cluj-Napoca.
                </p>

                <p className="text-lg leading-relaxed text-center mt-4">
                    <span>&gt; </span>
                    Here you can view my
                    <a
                        href="./CV_Raul_Muresan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span> </span>
                        <span className="text-blue-500 font-bold hover:underline">CV</span>
                    </a>
                    .
                </p>
            </div>
        </section>
    );
}
