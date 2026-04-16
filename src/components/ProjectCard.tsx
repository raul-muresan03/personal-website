"use client"

import { FaGithub } from "react-icons/fa";
import { TbPlanet } from "react-icons/tb";

export const ProjectCard = ({ title, desc, image, tags, link, link2 }) => {
    return (
        <div className="shadow-lg rounded-lg bg-gray-100 transform transition duration-300 hover:scale-105 hover:bg-gray-200 p-5">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{desc}</p>
            <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-4">

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:underline transition-all"
                >
                    <FaGithub className="text-xl" size={30}/>
                    <span className="font-bold">View on GitHub</span>
                </a>

                {link2 && (
                    <a
                        href={link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:underline transition-all"
                    >
                        <TbPlanet className="text-xl" size={30}/>
                        <span className="font-bold">View on Server </span>
                    </a>
                )}
            </div>
        </div>
    );
}