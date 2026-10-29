export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-6 py-4 bg-white">
            <div className="max-w-4xl mx-auto text-center text-xs text-gray-500">
                <p>
                    © {currentYear} Crafted by Raul Mureșan
                </p>
            </div>
        </footer>
    );
}
