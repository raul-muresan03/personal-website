import { FaBriefcase, FaGraduationCap, FaFilePdf } from "react-icons/fa";

export function Experience() {
    const timeline = [
        {
            type: "work",
            title: "Data Analyst (Working Student)",
            company: "Robert Bosch",
            period: "Oct 2025 – Present",
            details: [
                "Engineered an automated reminder system, reducing administrative workload for training compliance by 96%.",
                "Developed a scalable data model using advanced DAX measures to map complex hierarchical structures.",
                "Built a real-time tracking dashboard, saving ~180 hours annually through reporting automation."
            ],
            icon: <FaBriefcase className="text-white" />
        },
        {
            type: "work",
            title: "Programming Tutor",
            company: "IT Junior",
            period: "Jun 2024 – Sep 2025",
            details: [
                "Mentored 22 students in C, C++, HTML, CSS, and Python.",
                "Designed practical projects including basic AI implementations and games to increase engagement."
            ],
            icon: <FaBriefcase className="text-white" />
        },
        {
            type: "education",
            title: "B.Sc. in Computer Science",
            company: "Technical University of Cluj-Napoca",
            period: "2022 – 2026 (Expected)",
            details: [
                "Focusing on Data Structures & Algorithms, Machine Learning, and Artificial Intelligence.",
                "Currently working on Licence Thesis: Automated Exam Digitization using Computer Vision."
            ],
            icon: <FaGraduationCap className="text-white" />
        }
    ];

    return (
        <section id="experience" className="min-h-screen py-20 bg-blue-50 dark:bg-gray-900 flex flex-col items-center scroll-mt-20 transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Experience & Education</h2>

            <div className="relative w-full max-w-4xl px-4">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 dark:bg-blue-600 transform -translate-x-1/2"></div>

                {timeline.map((item, index) => (
                    <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 flex items-center justify-center transform -translate-x-1/2">
                            {item.icon}
                        </div>

                        <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700">
                                <span className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">{item.period}</span>
                                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                                <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-4">{item.company}</h4>
                                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 list-disc list-inside">
                                    {item.details.map((detail, i) => (
                                        <li key={i} className="leading-relaxed">{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
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
