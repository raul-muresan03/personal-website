export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                    © {currentYear} Crafted with ❤️ by <span className="text-blue-500 font-bold">Raul Mureșan</span>
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                    Built with React, Vite & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
