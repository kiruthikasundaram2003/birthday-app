import "../styles/Resons.css";
import { useState } from "react";

function Reasons() {
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const reasons = [

        "Your smile brightens my day 😊",

        "You always support me ❤️",

        "You make every moment special 🌸",

        "You understand me better than anyone ✨",

        "You make me laugh 😂",

        "You are kind and caring 💖",

        "You are my safe place 🌷",

        "You are not just a friend, you are my second mother 👭"

    ];

    return (

        <div className="reasons-page">

            <h1>❤️ Reasons Why You Are Special ❤️</h1>

            <div className="reason-container">

                {
                    reasons.map((reason, index) =>

                        <div className="reason-card" key={index}>

                            <h2>Reason #{index + 1}</h2>

                            <p>{reason}</p>

                        </div>

                    )
                }

            </div>

            <h1 className="open-title">🌷 Open When... ❤️</h1>

            <div className="reason-container">

                <div className="reason-card">
                    <button
                        onClick={() => {
                            setMessage(
                                "No matter what happens, remember that you are strong, beautiful, and deeply loved ❤️"
                            );
                            setShowModal(true);
                        }}
                    >
                        😢 Open When You're Sad
                    </button>
                </div>

                <div className="reason-card">
                    <button
                        onClick={() => {
                            setMessage(
                                "Seeing you happy makes me happy too! Keep smiling always 😊💖"
                            );
                            setShowModal(true);
                        }}
                    >
                        😊 Open When You're Happy
                    </button>
                </div>

                <div className="reason-card">
                    <button
                        onClick={() => {
                            setMessage(
                                "Distance doesn't matter. I'll always be your best friend ❤️🌸"
                            );
                            setShowModal(true);
                        }}
                    >
                        ❤️ Open When You Miss Me
                    </button>
                </div>

                <div className="reason-card">
                    <button
                        onClick={() => {
                            setMessage(
                                "Happy Birthday again, Renikka! May all your dreams come true 🎂✨"
                            );
                            setShowModal(true);
                        }}
                    >
                        🎂 Open On Your Next Birthday
                    </button>
                </div>
            </div>
            {
                showModal && (
                    <div className="modal-overlay">

                        <div className="modal">

                            <span
                                className="close-btn"
                                onClick={() => setShowModal(false)}
                            >
                                ✖
                            </span>

                            <h2>💖 Special Message 💖</h2>

                            <p>{message}</p>

                        </div>

                    </div>
                )
            }



        </div>



    );
}

export default Reasons;