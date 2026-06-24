import { useEffect, useState } from "react";

const EMOJIS = ["❤️", "🧡", "💛", "🌸", "✨", "💖", "🎀", "🌺"];

function FloatingHearts() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const initial = Array.from({ length: 12 }, (_, i) => createHeart(i));
        setHearts(initial);

        const interval = setInterval(() => {
            setHearts((prev) => {
                const now = Date.now();
                const alive = prev.filter((h) => now - h.createdAt < 7500);
                return [...alive, createHeart(now)];
            });
        }, 900);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,       /* BEHIND the quiz card (z-index: 10) */
            overflow: "hidden",
        }}>
            {hearts.map((heart) => (
                <span key={heart.id} style={heart.style}>
                    {heart.emoji}
                </span>
            ))}
        </div>
    );
}

function createHeart(id) {
    const left = Math.random() * 100;
    const size = 1.1 + Math.random() * 1.3;
    const duration = 5 + Math.random() * 3;
    const delay = Math.random() * 1.5;
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const sway = (Math.random() - 0.5) * 60;

    return {
        id: `${id}-${Math.random()}`,
        emoji,
        createdAt: Date.now(),
        style: {
            position: "fixed",
            bottom: "-60px",
            left: `${left}%`,
            fontSize: `${size}rem`,
            opacity: 0,
            pointerEvents: "none",
            animation: `heartFloat ${duration}s ${delay}s ease-in forwards`,
            "--sway": `${sway}px`,
            userSelect: "none",
        },
    };
}

if (typeof document !== "undefined") {
    const styleId = "floating-hearts-style";
    if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
      @keyframes heartFloat {
        0%   { transform: translateY(0) translateX(0) scale(0.6); opacity: 0; }
        10%  { opacity: 0.9; }
        50%  { transform: translateY(-50vh) translateX(calc(var(--sway) * 0.5)) scale(1); opacity: 0.75; }
        100% { transform: translateY(-105vh) translateX(var(--sway)) scale(0.7); opacity: 0; }
      }
    `;
        document.head.appendChild(style);
    }
}

export default FloatingHearts;