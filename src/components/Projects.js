"use client"

import { ProjectCard } from "./ProjectCard"

export function Projects() {
    const projects = [
        {
            title: 'NoteFlow (React, Node.js, Typescript, Convex, Tailwind CSS)',
            desc: 'NoteFlow is a note-taking application, based on React, Convex and Tailwind CSS, useful for smart organization and increased productivity.',
            image: "noteflow.png",
            tags: ['React', 'Node.js', 'Typescript', 'Convex', 'Tailwind CSS'],
            link: 'https://github.com/raul-muresan03/NoteFlow',
            link2: "https://note-flow-beryl.vercel.app/"
        },
        {
            title: 'Questify (React, Next.js, Typescript, Tailwind CSS, Java, Spring Boot, PostgreSQL)',
            desc: 'Questify is a Q&A platform that allows users to post questions and receive answers, with an upvote/downvote system to rank responses. Built using modern web technologies, it ensures a seamless experience for users looking for knowledge exchange.',
            image: "questify1.png",
            tags: ['React', 'Next.js', 'Typescript', 'Java', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL'],
            link: 'https://github.com/omuletzu/Questify',
        },
        {
            title: 'Security system with motion sensor and email notification (Arduino, C++)',
            desc: 'The project develops a security system using a PIR sensor for motion detection and a DHT11 sensor for temperature and humidity monitoring. When a presence is detected, the system automatically sends an email notification with the current temperature and humidity.',
            image: 'arduino.jpg',
            tags: ['Arduino', 'C++'],
            link: 'https://github.com/raul-muresan03/Security-System-With-Motion-Sensor-And-Email-Notification'
        },
        {
            title: 'ALU (VHDL, C)',
            desc: 'ALU (Arithmetic Logic Unit) capable of doing floating point calculations, written in VHDL, in the Vivado development environment. The user has the option to enter the operations from the software application, written in C, in the Vitis development environment.',
            image: 'alu.png',
            tags: ['VHDL', 'C'],
            link: 'https://github.com/raul-muresan03/ALU'
        },
        {
            title: 'Code Locker (VHDL)',
            desc: 'Code-Locker is a locker security system programmed in VHDL, offering reset and extension options for enhanced security.',
            image: 'code_locker.jpg',
            tags: ['VHDL'],
            link: 'https://github.com/raul-muresan03/Code-Locker'
        },

        {
            title: 'PACMAN (Assembly x86)',
            desc: 'Developed during my first year of university, using x86 Assembly. This project taught me a great deal of new concepts and significantly shaped my logical thinking. It sparked my interest in working with Assembly language.',
            image: 'pacman.png',
            tags: ['Assembly x86'],
            link: 'https://github.com/raul-muresan03/Pacman_Assembly_x86'
        },
        {
            title: 'MIPS Processor 32bit (VHDL)',
            desc: 'Both pipeline and single cycle versions on 32-bit.',
            image: 'mips.png',
            tags: ['VHDL'],
            link: 'https://github.com/raul-muresan03/MIPS-pipeline'
        },
        {
            title: 'Polynomial Calculator (Java)',
            desc: 'Simple Polynomial Calculator for basic operations like +, -, *,/., derivation and integration',
            image: 'polynomial.png',
            tags: ['Java'],
            link: 'https://github.com/raul-muresan03/Polynomial-Calculator'
        },
        {
            title: 'Queue Manager (Java)',
            desc: 'The application simulates queue-based systems, analyzing average waiting time, service time and peak hours. Utilizing a model-based architecture, GUI and BusinessLogic, it allows real-time configuration and monitoring of queues, using different task allocation policies.',
            image: 'queue.png',
            tags: ['Java'],
            link: 'https://github.com/raul-muresan03/Queue-Manager'
        },
        {
            title: 'Order Management System (Java, SQL)',
            desc: 'The project consists in developing an order management application for a warehouse, using a layered architecture and relational databases. The application allows to manage customers, products and orders, implementing CRUD operations and using reflection to generate SQL queries.',
            image: 'order.png',
            tags: ['Java', 'SQL'],
            link: 'https://github.com/raul-muresan03/Order-Management-System'
        },

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