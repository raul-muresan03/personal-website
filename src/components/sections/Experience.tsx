import { FaFilePdf } from "react-icons/fa";
import { TIMELINE } from "../../constants";

const EXPERIENCE_SECTIONS = [
    { type: "work", title: "Experience" },
    { type: "education", title: "Education" },
] as const;

export function Experience() {
    return (
        <section id="experience" className="px-6 py-12 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    {EXPERIENCE_SECTIONS.map((section) => (
                        <section key={section.type} aria-labelledby={`${section.type}-heading`}>
                            <h2 id={`${section.type}-heading`} className="text-2xl font-display font-bold mb-6">
                                {section.title}
                            </h2>
                            <div className="space-y-8">
                                {TIMELINE.filter((item) => item.type === section.type).map((item) => (
                                    <article key={item.title}>
                                        <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                                            <h3 className="min-w-0 text-lg font-bold">
                                                {item.title}
                                                <span className="font-normal text-gray-600"> · {item.company}</span>
                                            </h3>
                                            <p className="shrink-0 whitespace-nowrap text-sm text-gray-500">{item.period}</p>
                                        </header>
                                        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                                            {item.details.map((detail) => (
                                                <li key={detail} className="leading-relaxed">{detail}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <a
                    href="./CV_Raul_Muresan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline"
                >
                    <FaFilePdf /> View Full CV
                </a>
            </div>
        </section>
    );
}
