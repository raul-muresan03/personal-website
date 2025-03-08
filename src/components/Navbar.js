"use client"

import { Button } from "./Button";

export function Navbar() {
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 "translate-y-0"  bg-gray-100 text-white p-4 flex justify-center space-x-4`}
        >
            <Button text="Home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
            <Button text="About Me" onClick={() => document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" })} />
            <Button text="Projects" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })} />
            <Button text="Skills" onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })} />
            <Button text="Contact" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} />
        </nav >
    );
}