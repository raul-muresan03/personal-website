import { ComponentType } from "react";
import { FaPython, FaDatabase, FaJava } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiTypescript, SiOpencv } from "react-icons/si";

interface SkillCardProps {
    name: string;
    experience: string;
    level: string;
    Icon: ComponentType<{ className?: string }>;
}

const skills: SkillCardProps[] = [
    { name: "C / C++", experience: "5", level: "Intermediate", Icon: SiCplusplus },
    { name: "Python", experience: "3", level: "Intermediate", Icon: FaPython },
    { name: "React / Next.js", experience: "3", level: "Intermediate", Icon: SiNextdotjs },
    { name: "TypeScript", experience: "2", level: "Intermediate", Icon: SiTypescript },
    { name: "Java", experience: "3", level: "Intermediate", Icon: FaJava },
    { name: "SQL / PostgreSQL", experience: "3", level: "Intermediate", Icon: FaDatabase },
    { name: "OpenCV", experience: "1", level: "Intermediate", Icon: SiOpencv },
];

export function SkillCard({ name, experience, level, Icon }: SkillCardProps) {
    const experienceText = experience === "1" ? "1 year" : `${experience} years`;

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center text-center">
            <Icon className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">
                {name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
                {level} ({experienceText})
            </p>
        </div>
    )
}

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}