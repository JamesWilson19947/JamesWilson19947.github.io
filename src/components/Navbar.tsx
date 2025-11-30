import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border-b border-white/20 dark:border-slate-700/20"
        >
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                JW
            </div>
            <div className="flex items-center gap-6">
                <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Projects
                </a>
                <a href="https://www.linkedin.com/in/jpwilson/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Contact
                </a>
                <ThemeToggle />
            </div>
        </motion.nav>
    );
};
