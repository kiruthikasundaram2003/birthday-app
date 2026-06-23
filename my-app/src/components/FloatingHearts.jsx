import { useEffect, useState } from "react";

const EMOJIS = ["❤️", "🧡", "💛", "🌸", "✨", "💖", "🎀", "🌺"];

function FloatingHearts() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Create initial batch
        const initial = Array.from({ length: 14 }, (_, i) => createHeart(i));
        setHearts(initial);

        // Keep adding new hearts every 800ms
        const interval = setInterval(() => {
            setHearts((prev) => {
                // Remove old ones (older than 7s) and add a new one
                const now = Date.now();
                const alive = prev.filter((h) => now - h.createdAt < 7200);
                return [...alive, createHeart(now)];
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            {hearts.map((heart) => (
                <span key={heart.id} style={heart.style}>
                    {heart.emoji}
                </span>
            ))}
        </div>
    );
}

function createHeart(id) {
    const left = Math.random() * 100;          // 0–100%
    const size = 1.1 + Math.random() * 1.4;   // 1.1rem – 2.5rem
    const duration = 5 + Math.random() * 3;   // 5s – 8s
    const delay = Math.random() * 1.5;        // 0 – 1.5s head-start
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const sway = (Math.random() - 0.5) * 60; // horizontal drift px

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
            zIndex: 5,
            animation: `heartFloat ${duration}s ${delay}s ease-in forwards`,
            "--sway": `${sway}px`,
            userSelect: "none",
        },
    };
}

const styles = {
    container: {
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
    },
};

// Inject keyframes once
if (typeof document !== "undefined") {
    const styleId = "floating-hearts-style";
    if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
      @keyframes heartFloat {
        0%   { transform: translateY(0)   translateX(0)             scale(0.6); opacity: 0; }
        10%  { opacity: 1; }
        50%  { transform: translateY(-50vh) translateX(calc(var(--sway) * 0.5)) scale(1); opacity: 0.85; }
        100% { transform: translateY(-105vh) translateX(var(--sway))            scale(0.7); opacity: 0; }
      }
    `;
        document.head.appendChild(style);
    }
}

export default FloatingHearts;