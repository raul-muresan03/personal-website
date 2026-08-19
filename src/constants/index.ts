import type { ComponentType } from "react";
import { FaPython, FaDatabase, FaJava } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiTypescript, SiOpencv } from "react-icons/si";

export const EMAIL = "raulmuresancalin@gmail.com";

export const TYPEWRITER_STRINGS = [
    "Software Engineer.",
    "Full Stack Developer.",
    "Computer Vision Enthusiast.",
] as const;

export const NAV_LINKS = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
] as const;

export interface Project {
    title: string;
    desc: string;
    image: string;
    tags: string[];
    link: string;
    link2?: string;
}

export const PROJECTS: Project[] = [
    {
        title: 'MathSim (Licence Thesis)',
        desc: 'Advanced Computer Vision pipeline for digitizing mathematical quizzes. Achieved 100% indexing accuracy on 950+ grids using OpenCV and Tesseract OCR, featuring parallel processing for a 7x speedup.',
        image: "licenta_MathSim.png",
        tags: ['Python', 'OpenCV', 'Tesseract OCR', 'Computer Vision', 'Parallel Processing'],
        link: 'https://github.com/raul-muresan03/MathSim',
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

export interface Skill {
    name: string;
    experience: string;
    level: string;
    Icon: ComponentType<{ className?: string }>;
}

export const SKILLS: Skill[] = [
    { name: "C / C++", experience: "5", level: "Intermediate", Icon: SiCplusplus },
    { name: "Python", experience: "3", level: "Intermediate", Icon: FaPython },
    { name: "React / Next.js", experience: "3", level: "Intermediate", Icon: SiNextdotjs },
    { name: "TypeScript", experience: "2", level: "Intermediate", Icon: SiTypescript },
    { name: "Java", experience: "2", level: "Intermediate", Icon: FaJava },
    { name: "SQL / PostgreSQL", experience: "3", level: "Intermediate", Icon: FaDatabase },
    { name: "OpenCV", experience: "2", level: "Intermediate", Icon: SiOpencv },
];

export interface TimelineItem {
    type: "work" | "education";
    title: string;
    company: string;
    period: string;
    details: string[];
}

export const TIMELINE: TimelineItem[] = [
    {
        type: "work",
        title: "Data Analyst (Working Student)",
        company: "Robert Bosch",
        period: "Jul 2025 – Present",
        details: [
            "Engineered an automated reminder system, reducing administrative workload for training compliance by 96%.",
            "Developed a scalable data model using advanced DAX measures to map complex hierarchical structures.",
            "Built a real-time training tracking dashboard, saving ~180 hours annually for my colleagues."
        ]
    },
    {
        type: "work",
        title: "Programming Tutor",
        company: "IT Junior",
        period: "Jun 2024 – Sep 2025",
        details: [
            "Mentored 22 students in C, C++, HTML, CSS, and Python.",
            "Designed practical projects including basic AI implementations and games to increase engagement."
        ]
    },
    {
        type: "education",
        title: "B.Sc. in Computer Science (Graduated)",
        company: "Technical University of Cluj-Napoca",
        period: "2022 – 2026",
        details: [
            "Focusing on Data Structures & Algorithms, Machine Learning, and Artificial Intelligence.",
            "Licence Thesis: MathSim - Automated Exam Digitization using Computer Vision."
        ]
    }
];
