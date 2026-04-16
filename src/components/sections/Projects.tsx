"use client"

import { ProjectCard } from "../ui/ProjectCard"

export function Projects() {
    const projects = [
        {
            title: 'ToolGrile (Licence Thesis)',
            desc: 'Advanced Computer Vision pipeline for digitizing mathematical quizzes. Achieved 100% indexing accuracy on 950+ grids using OpenCV and Tesseract OCR, featuring parallel processing for a 7x speedup.',
            image: "exam_digitization.png",
            tags: ['Python', 'OpenCV', 'Tesseract OCR', 'Computer Vision', 'Parallel Processing'],
            link: 'https://github.com/raul-muresan03/ToolGrile',
        },
        {
            title: 'NoteFlow',
            desc: 'A content management application optimizing load times and SEO via Next.js Server-Side Rendering (SSR). Built a type-safe, modular architecture to ensure scalability.',
            image: "noteflow.png",
            tags: ['React', 'Next.js', 'Typescript', 'Convex', 'Tailwind CSS'],
            link: 'https://github.com/raul-muresan03/NoteFlow',
            link2: "https://note-flow-beryl.vercel.app/"
        },
        {
            title: 'Questify',
            desc: 'Q&A platform designed with a normalized PostgreSQL database schema to efficiently handle complex user interactions and voting logic. Implemented secure RESTful endpoints.',
            image: "questify1.png",
            tags: ['React', 'PostgreSQL', 'REST API', 'Typescript', 'Tailwind CSS'],
            link: 'https://github.com/omuletzu/Questify',
        },
        {
            title: 'IoT Security System',
            desc: 'Created a motion-detection system integrating temperature/humidity sensors and real-time alerts via IFTTT webhooks for immediate email notifications.',
            image: 'arduino.jpg',
            tags: ['C++', 'Arduino UNO R4', 'IFTTT', 'IoT'],
            link: 'https://github.com/raul-muresan03/Security-System-With-Motion-Sensor-And-Email-Notification'
        },
        {
            title: 'Pacman Clone',
            desc: 'Engineered a low-level game clone in x86 Assembly, focusing on manual memory management and optimized graphics rendering logic.',
            image: 'pacman.png',
            tags: ['Assembly x86', 'Low-level'],
            link: 'https://github.com/raul-muresan03/Pacman_Assembly_x86'
        }
    ];

    return (
        <section id="projects" className="flex items-center justify-center mb-16 scroll-mt-20">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">My projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div className="max-w-sm mx-auto" key={index}>
                            <ProjectCard
                                key={index}
                                title={project.title}
                                desc={project.desc}
                                image={project.image}
                                tags={project.tags}
                                link={project.link}
                                link2={project.link2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}