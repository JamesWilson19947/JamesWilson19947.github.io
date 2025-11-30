import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-500 relative overflow-hidden">
            <Navbar />

            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-400/30 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-pink-400/30 dark:bg-pink-900/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <main className="relative z-10">
                <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 pt-20 max-w-7xl mx-auto gap-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                            I turn complex ideas into working products
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light"
                        >
                            Building the future, one line of code at a time.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-8 space-y-6"
                        >
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                                I’m James, an engineer from the UK. I work at the intersection of infrastructure, automation, and applied AI. I design scalable systems that combine cloud architecture with smart tools. This includes AWS-powered platforms and AI-driven automation that helps teams work faster and make better decisions. My focus remains the same: clarity, reliability, and solving real problems instead of just writing code. Whether I’m building cloud workflows, creating secure automation, or trying out new AI features, I strive to make complex systems feel simple, powerful, and genuinely useful.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {["EC2", "Lambda", "DynamoDB", "SQS", "SNS", "API Gateway", "IAM", "VPC", "Terraform", "CDK", "GitHub Actions", "Node.js", "TypeScript", "API Design", "Event-Driven Systems", "Serverless Architecture", "Microservices", "CI/CD Pipelines", "Infrastructure Automation", "Environment Provisioning", "Secrets Management", "Monitoring", "Logging", "Neptune Graph DB", "Gremlin", "OpenCypher", "OpenSearch Vector Search", "LLM Integration", "Bedrock Agents", "Shift-Left Security", "Static Code Analysis", "PR Scanning Tools", "Zero-Knowledge Architecture"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 relative flex justify-center md:justify-end"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl opacity-50 animate-pulse" />
                        <img
                            src="/me.png"
                            alt="James Wilson"
                            className="relative w-full max-w-md object-contain drop-shadow-2xl z-10"
                        />
                    </motion.div>
                </section>

                <Projects />
            </main>

            <Footer />
        </div>
    );
}

export default App;
