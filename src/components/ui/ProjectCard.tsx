import { FaGithub } from "react-icons/fa";
import { TbPlanet } from "react-icons/tb";
import type { Project } from "../../constants";

export const ProjectCard = ({ title, desc, image, tags, link, link2 }: Project) => {
    return (
        <article className="border-b border-gray-200 py-5">
            <div className="grid items-start gap-4 sm:grid-cols-[minmax(0,1fr)_14rem] sm:gap-6">
                <div className="min-w-0">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-1 leading-relaxed text-gray-700">{desc}</p>
                    <ul className="mt-2 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
                        {tags.map((tag) => (
                            <li key={tag} className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-800">
                                {tag}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:underline"
                        >
                            <FaGithub className="text-lg" size={20} />
                            <span className="font-bold">GitHub</span>
                        </a>

                        {link2 && (
                            <a
                                href={link2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:underline"
                            >
                                <TbPlanet className="text-lg" size={20} />
                                <span className="font-bold">Demo</span>
                            </a>
                        )}
                    </div>
                </div>

                <img
                    src={image}
                    alt={`${title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="h-40 w-full rounded-md bg-gray-50 object-contain p-1"
                />
            </div>
        </article>
    );
}
