import type { ComponentType } from "react";
import { FaBrain, FaCode, FaDatabase, FaLanguage, FaReact } from "react-icons/fa";

export const EMAIL = "raulmuresancalin@gmail.com";

export const TYPEWRITER_STRINGS = [
    "Software Engineer.",
    "Full Stack Developer.",
    "Computer Vision & RAG Enthusiast.",
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
        title: "MathSim (Bachelor’s Thesis)",
        desc: 'Full-stack platform for digitizing and grading 959 math questions from a 166-page dataset. An OpenCV/Tesseract OCR pipeline achieved a 7.2× speedup (63s to 8.7s) using multiprocessing. FastAPI/PostgreSQL supports JWT authentication, student/admin roles, persistent exam sessions, and automatic grading; Next.js provides timed quizzes and progress tracking.',
        image: "licenta_MathSim.png",
        tags: ['Python', 'OpenCV', 'Tesseract OCR', 'FastAPI', 'PostgreSQL', 'Next.js'],
        link: 'https://github.com/raul-muresan03/MathSim',
        link2: 'https://mathsim-lac.vercel.app/',
    },
    {
        title: 'SEC 10-K RAG',
        desc: 'RAG application for SEC 10-K filings, with semantic chunking, cosine-similarity retrieval in Python, generated answers, ranked passages, and original sources. Deployed serverlessly with immutable indexes, local Docker/Ollama support, automated tests, and CI/CD smoke checks. Evaluated on 16 held-out questions: Hit@5 of 10/12 on answerable queries, correct abstention on 4/4 unanswerable queries, and 0 false abstentions.',
        image: 'sec-10k-rag.png',
        tags: ['Python', 'FastAPI', 'React', 'Docker', 'Vercel', 'Ollama', 'Cloudflare Workers AI'],
        link: 'https://github.com/raul-muresan03/sec-10k-rag',
        link2: 'https://sec-10k-rag-rauls-projects-2096a6fa.vercel.app/',
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
    description: string;
    Icon: ComponentType<{ className?: string }>;
}

export const SKILLS: Skill[] = [
    {
        name: "Programming Languages",
        description: "Python, JavaScript/TypeScript, SQL, C/C++",
        Icon: FaCode,
    },
    {
        name: "Frameworks & Libraries",
        description: "FastAPI, SQLAlchemy, React, Next.js, OpenCV",
        Icon: FaReact,
    },
    {
        name: "Databases & Tools",
        description: "PostgreSQL, Docker, Git, Linux, pytest, GitHub Actions",
        Icon: FaDatabase,
    },
    {
        name: "Applied AI",
        description: "RAG, Embeddings, Semantic Chunking, Vector Search, Ollama",
        Icon: FaBrain,
    },
    {
        name: "Languages",
        description: "Romanian (Native), English (Fluent), French (Intermediate)",
        Icon: FaLanguage,
    },
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
        title: "Data Analyst",
        company: "Robert Bosch",
        period: "2025 – 2026",
        details: [
            "Engineered an automated reminder system replacing manual follow-ups, reducing administrative workload for training compliance by 96% using Power BI, Power Automate and SharePoint Lists.",
            "Developed a scalable data model using advanced Power Query (M) to map hierarchical structures across 3 management tiers.",
            "Built a real-time dashboard for training tracking, saving ~180 hours annually by automating manual reporting tasks."
        ]
    },
    {
        type: "work",
        title: "Programming Tutor",
        company: "IT Junior",
        period: "2024 – 2025",
        details: [
            "Mentored 22 students in C, C++, HTML, CSS and Python, adapting complex curriculum to individual learning speeds and skill levels.",
            "Designed practical projects (basic AI implementations, games, websites) to increase student engagement and technical retention."
        ]
    },
    {
        type: "education",
        title: "B.Sc. in Computer Science (Graduated)",
        company: "Technical University of Cluj-Napoca",
        period: "2022 – 2026",
        details: [
            "Relevant Coursework: Data Structures & Algorithms, Machine Learning, OOP, Databases, Artificial Intelligence, Operating Systems."
        ]
    }
];
