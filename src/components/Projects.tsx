import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
        title: "BlindPass",
        description: "A revolutionary way to share passwords using zero trust authentication.",
        details: "BlindPass.io is a zero-knowledge, zero-visibility secure note and credential-sharing platform I built with a simple goal: let people share sensitive information without the server ever seeing it. It uses a browser-first encryption model where all cryptographic operations happen client-side, ensuring plaintext data never touches the network. Data is encrypted with AES-256-GCM entirely in the browser using a cryptographically secure 256-bit key. Keys are never transmitted — they’re stored in the URL hash fragment, which never leaves the client. The backend stores only encrypted ciphertext. No plaintext, no keys, no IP addresses, no logs, no accounts.",
        tags: ["React", "Node.js", "TypeScript", "Cryptography", "Tailwind", "Vite", "Vercel", "TursoDB"],
        link: "https://www.blindpass.io/about",
        github: "https://github.com/JamesWilson19947/BlindPass"
    },
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white"
                >
                    Featured Work
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                                    View Details
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`project-${projects.indexOf(selectedProject)}`}
                            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                                {selectedProject.title}
                            </h3>

                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                {selectedProject.details}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    <Github size={20} /> View Code
                                </a>
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
