import "../styles/Surprise.css";
import FloatingHearts from "../components/FloatingHearts";

function Surprise() {

    return (

        <div className="surprise-page">

            <FloatingHearts />

            {/* Background Music */}
            <audio autoPlay loop>
                <source src="/finalsong.mp3" type="audio/mp3" />
            </audio>

            {/* Stars */}
            <div className="stars">
                ✨ ✨ ✨ ✨ ✨
            </div>

            {/* Balloons */}
            <div className="balloons">
                🎈🎈🎈🎈🎈
            </div>

            {/* Main Title */}
            <h1 className="birthday-title">
                🎂 Happy Birthday Renikka ❤️
            </h1>

            {/* Final Letter */}
            <div className="letter-box">

                <h2>💌 A Final Letter From Kiruthika</h2>

                <p>
                    Dear Renikka ❤️,
                    <br /><br />

                    Happy Birthday to the most wonderful person in my life. 🌸
                    Thank you for always being with me,
                    supporting me and creating beautiful memories together.

                    <br /><br />

                    These 6 years have been filled with laughter,
                    happiness and countless unforgettable moments.

                    <br /><br />

                    No matter where life takes us,
                    our friendship will always remain special. ✨

                    <br /><br />

                    🌷 Thank You For These 6 Beautiful Years ❤️

                    <br /><br />

                    With lots of love,
                    <br />
                    Kiruthika 💖
                </p>

            </div>

            {/* Fireworks */}
            <div className="fireworks">
                🎆 🎇 🎆 🎇 🎆
            </div>

        </div>

    );
}

export default Surprise;