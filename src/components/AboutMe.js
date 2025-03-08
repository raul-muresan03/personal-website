"use client"

export function AboutMe() {
    return (
        <section id="aboutme" className="h-screen flex items-center justify-center bg-gray-100 mb-16 scroll-mt-20">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-8">About me</h1>
                <div className="flex justify-center items-center mt-20 text-lg">
                    <p>
                        <span>&gt; </span>
                        3rd Year Computer Science student at Technical University of Cluj-Napoca.
                        <br />
                        <span>&gt; </span>

                        <span className="font-bold text-blue-500">Full Stack Developer</span> working on both <span className="font-bold text-blue-500">software (web apps and mobile apps)
                            <br />
                        </span>
                        <div className="flex justify-center items-center">
                            and
                            <span className="p-1 font-bold text-blue-500">hardware</span> (FPGA and circuits).

                        </div>
                    </p>
                </div>
            </div>
        </section>
    );
}