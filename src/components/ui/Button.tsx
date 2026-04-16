interface ButtonProps {
    text: string;
    onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            className="text-blue-600 dark:text-blue-400 font-bold py-2 px-4 rounded-lg bg-transparent hover:bg-blue-600/10 dark:hover:bg-blue-400/10 transition-colors"
            onClick={onClick}
        >
            {text}
        </button>
    );
}