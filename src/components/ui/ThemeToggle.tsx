import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-yellow-300 hover:scale-110 transition-transform"
        >
            {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
    );
}
