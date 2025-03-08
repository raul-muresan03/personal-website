"use client";
import { FaReact, FaJava, FaPython, FaDatabase, FaMicrochip, FaNodeJs  } from "react-icons/fa";
import { SiC, SiCplusplus, SiElm, SiHaskell, SiTailwindcss, SiOpengl  } from "react-icons/si";
import { PiMathOperationsFill } from "react-icons/pi";
import { DiProlog } from "react-icons/di";
import { GiProcessor } from "react-icons/gi";

const skills = [
    { name: "C++", experience: "5", level: "Advanced", Icon: SiCplusplus },
    { name: "C", experience: "4", level: "Advanced", Icon: SiC },
    { name: "Java", experience: "3", level: "Intermediate", Icon: FaJava },
    { name: "Python", experience: "2", level: "Beginner", Icon: FaPython },
    { name: "React", experience: "2", level: "Intermediate", Icon: FaReact },
    { name: "Node.js", experience: "2", level: "Intermediate", Icon: FaNodeJs  },
    { name: "VHDL", experience: "3", level: "Intermediate", Icon: FaMicrochip },
    { name: "SQL", experience: "2", level: "Beginner", Icon: FaDatabase },
    { name: "MATLAB", experience: "1", level: "Beginner", Icon: PiMathOperationsFill },
    { name: "Assembly", experience: "1", level: "Beginner", Icon: GiProcessor },
    { name: "ELM", experience: "1", level: "Beginner", Icon: SiElm },
    { name: "Haskell", experience: "1", level: "Beginner", Icon: SiHaskell },
    { name: "Tailwind CSS", experience: "1", level: "Beginner", Icon: SiTailwindcss },
    { name: "Prolog", experience: "1", level: "Beginner", Icon: DiProlog },
    { name: "OpenGL", experience: "1", level: "Beginner", Icon: SiOpengl },
];

export function SkillCard({ name, experience, level, Icon }) {
    const experienceText = experience === "1" ? "1 year" : `${experience} years`;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center text-center">
            <Icon className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">
                {name}
            </h3>
            <p className="text-gray-700">
                {level} ({experienceText})
            </p>
        </div>
    )
}

export function Skills() {
    return (
        <section id="skills" className="flex items-center justify-center scroll-mt-20">
            <div className="text-center">
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