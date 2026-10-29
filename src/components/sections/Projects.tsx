import { PROJECTS } from "../../constants";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
    return (
        <section id="projects" className="px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-display font-bold mb-4">My projects</h2>
                <div>
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
