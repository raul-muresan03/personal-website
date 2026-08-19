import { FaBriefcase, FaGraduationCap, FaFilePdf } from "react-icons/fa";
import { TIMELINE } from "../../constants";

export function Experience() {
    return (
        <section id="experience" className="min-h-screen py-20 bg-blue-50 dark:bg-gray-900 flex flex-col items-center scroll-mt-20 transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Experience & Education</h2>

            <div className="relative w-full max-w-4xl px-4">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 dark:bg-blue-600 transform -translate-x-1/2"></div>

                {TIMELINE.map((item, index) => {
                    const Icon = item.type === "work" ? FaBriefcase : FaGraduationCap;

                    return (
                        <div key={item.title} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 flex items-center justify-center transform -translate-x-1/2">
                                <Icon className="text-white" />
                            </div>

                            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700">
                                    <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">{item.period}</span>
                                    <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                                    <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-4">{item.company}</h4>
                                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 list-disc list-inside">
                                        {item.details.map((detail) => (
                                            <li key={detail} className="leading-relaxed">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <a
                href="./CV_Raul_Muresan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
                <FaFilePdf /> View Full CV
            </a>
        </section>
    );
}
