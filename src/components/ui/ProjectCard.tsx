import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { TbPlanet, TbZoomIn } from "react-icons/tb";
import type { Project } from "../../constants";

export const ProjectCard = ({ title, desc, image, tags, githubUrl, demoUrl }: Project) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

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
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-800 hover:text-blue-500 hover:underline"
                        >
                            <FaGithub className="text-lg" size={20} />
                            <span className="font-bold">GitHub</span>
                        </a>

                        {demoUrl && (
                            <a
                                href={demoUrl}
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

                <button
                    type="button"
                    aria-label={`View larger screenshot of ${title}`}
                    onClick={() => dialogRef.current?.showModal()}
                    className="group relative h-40 w-full cursor-zoom-in overflow-hidden rounded-md bg-gray-50 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    <img
                        src={image}
                        alt={`${title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-1"
                    />
                    <span
                        aria-hidden="true"
                        className="absolute bottom-2 right-2 rounded-full bg-white/90 p-1.5 text-gray-700 shadow-sm transition-colors group-hover:text-blue-600 group-focus-visible:text-blue-600"
                    >
                        <TbZoomIn size={18} />
                    </span>
                </button>
            </div>

            <dialog
                ref={dialogRef}
                aria-label={`${title} screenshot`}
                onClick={(event) => {
                    if (!(event.target instanceof HTMLImageElement)) event.currentTarget.close();
                }}
                className="max-h-[90vh] w-[95vw] max-w-6xl border-0 bg-transparent p-0 text-white backdrop:bg-black/80"
            >
                <div className="flex max-h-[90vh] min-h-48 items-center justify-center">
                    <img
                        src={image}
                        alt={`${title} enlarged screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-[85vh] max-w-full object-contain"
                    />
                </div>
            </dialog>
        </article>
    );
}
