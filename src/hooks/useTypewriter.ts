import { useEffect, useState } from "react";

interface UseTypewriterOptions {
    typingSpeed?: number;
    deletingSpeed?: number;
    pause?: number;
}

export function useTypewriter(
    words: readonly string[],
    { typingSpeed = 75, deletingSpeed = 40, pause = 1500 }: UseTypewriterOptions = {}
) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];
        let timeout: number;

        if (!deleting && text === current) {
            timeout = window.setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === "") {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            timeout = window.setTimeout(
                () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
                deleting ? deletingSpeed : typingSpeed
            );
        }

        return () => window.clearTimeout(timeout);
    }, [words, text, deleting, wordIndex, typingSpeed, deletingSpeed, pause]);

    return text;
}
