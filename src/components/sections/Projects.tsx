import { PROJECTS } from "../../constants";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
    return (
        <section id="projects" className="flex items-center justify-center mb-16 scroll-mt-20">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">My projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div className="max-w-sm mx-auto" key={project.title}>
                            <ProjectCard
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
