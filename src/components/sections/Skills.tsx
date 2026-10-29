import { SKILLS } from "../../constants";

export function Skills() {
    return (
        <section id="skills" className="px-6 py-12 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-display font-bold mb-6">Skills</h2>
                <dl className="space-y-3 text-gray-700">
                    {SKILLS.map((skill) => (
                        <div key={skill.name} className="leading-relaxed">
                            <dt className="inline font-semibold text-gray-900">{skill.name}:</dt>{" "}
                            <dd className="inline">{skill.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
