import HTMLFlipBook from "react-pageflip";
import "../styles/Memories.css"

function Memories() {

    return (

        <div>

            <h1
                style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "40px"
                }}
            >
                📖 Our Beautiful Memories ❤️
            </h1>

            <HTMLFlipBook width={400} height={300}>



                <div className="page">
                    <h1>2021 🌸</h1>
                    <p>See the First Time.</p>
                </div>

                <div className="page">
                    <h1>2022 🎉</h1>
                    <p>Become the friends and Enimes.</p>
                </div>

                <div className="page">
                    <h1>2023 ✨</h1>
                    <p>We became friends.</p>
                </div>

                <div className="page">
                    <h1>2024 💖</h1>
                    <p>Lots of laughter and fun.</p>
                </div>
                <div className="page">
                    <h1>2025 💖</h1>
                    <p>Unforgettable moments.</p>
                </div>
                <div className="page">
                    <h1>2026 💖</h1>
                    <p>Our friendship is still continue.</p>
                </div>

            </HTMLFlipBook>

        </div>

    );
}

export default Memories;