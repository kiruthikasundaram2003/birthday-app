import { useState } from "react";
import "../styles/Quiz.css";
import FloatingHearts from "../components/FloatingHearts";

function Quiz() {

    const questions = [
        {
            question: "How many years have we been friends?",
            options: ["2 Years", "4 Years", "6 Years", "10 Years"],
            answer: "6 Years"
        },
        {
            question: "What am I to you?",
            options: ["Friend", "Best Friend", "Second Mother", "All of the Above"],
            answer: "All of the Above"
        },
        {
            image: "/6.jpeg",
            question: "📸 Etha Photo Yaga Yaduthathu",
            options: ["Bon Bon shop", "Ifruit shop", "Dock and Dine shop"],
            answer: "Ifruit shop"
        },
        {
            question: "In which month is my birthday?",
            options: ["May", "June", "August", "November"],
            answer: "November"
        },
        {
            image: "/q1.jpeg",
            question: "📸 Etha Photo Yaga Yaduthathu",
            options: ["College", "School Hostel", "My Hostel", "Park"],
            answer: "School Hostel"
        },
        {
            image: "/q2.jpeg",
            question: "📸 Etha Chocolate yaru kuduthathu , yapa kuduthathu",
            options: ["kiruthika for renikka birthday", "Chirstmas", "Renikka for Kiruthika birthday"],
            answer: "Renikka for Kiruthika birthday"
        },
        {
            image: "/8.jpeg",
            question: "📸 Etha Photo Yaga Yaduthathu",
            options: ["Bon Bon shop", "Ifruit shop", "Dock and Dine shop"],
            answer: "Ifruit shop"
        }

    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [aboutMe, setAboutMe] = useState("");


    const handleNext = () => {

        const answerData = {
            question: questions[currentQuestion].question,
            selectedAnswer: selectedOption,
            correctAnswer: questions[currentQuestion].answer
        };

        const updatedAnswers = [...userAnswers, answerData];

        setUserAnswers(updatedAnswers);

        if (selectedOption === questions[currentQuestion].answer) {
            setScore(prev => prev + 1);
        }

        setSelectedOption("");

        if (currentQuestion === questions.length - 1) {

            setShowAboutMe(true);

        } else {

            setCurrentQuestion(prev => prev + 1);

        }
    };

    const handleSubmit = () => {

        localStorage.setItem(
            "renikkaQuizAnswers",
            JSON.stringify({
                score,
                answers: userAnswers,
                tellAboutKiruthika: aboutMe,
                submittedAt: new Date().toLocaleString()
            })
        );

        setShowResult(true);
    };


    return (

        <div className="quiz-page">

            <h1>🎮 Friendship Quiz ❤️</h1>
            {
                showResult ? (

                    <>
                        <FloatingHearts />

                        <div className="result-box">

                            <h2>
                                You scored {score} / {questions.length}
                            </h2>

                            <h3>
                                💖 Best Friends Forever 💖
                            </h3>

                            <p>
                                🌸 Thank you for 6 years of beautiful friendship ❤️
                            </p>

                            <div className="saved-message">

                                <h3>💌 Your Message About Me</h3>

                                <p>{aboutMe}</p>

                            </div>

                        </div>

                    </>

                ) : showAboutMe ? (

                    <div className="quiz-card">

                        <FloatingHearts />

                        <h2>
                            💌 One Final Question ❤️
                        </h2>

                        <h3>
                            Tell Something About Me
                        </h3>

                        <textarea
                            placeholder="Write anything you feel about me..."
                            value={aboutMe}
                            onChange={(e) => setAboutMe(e.target.value)}
                            rows="6"
                            className="about-textarea"
                        />

                        <button
                            className="next-btn"
                            onClick={handleSubmit}
                            disabled={!aboutMe.trim()}
                        >
                            Finish Quiz ❤️
                        </button>

                    </div>

                ) : (

                    <div className="quiz-card">

                        {
                            questions[currentQuestion].image && (
                                <img
                                    src={questions[currentQuestion].image}
                                    alt=""
                                    className="quiz-image"
                                />
                            )
                        }

                        <h2>
                            {questions[currentQuestion].question}
                        </h2>

                        {
                            questions[currentQuestion].options.map((option, index) => (

                                <button
                                    key={index}
                                    className={
                                        selectedOption === option
                                            ? "selected"
                                            : ""
                                    }
                                    onClick={() =>
                                        setSelectedOption(option)
                                    }
                                >
                                    {option}
                                </button>

                            ))
                        }

                        <button
                            className="next-btn"
                            onClick={handleNext}
                            disabled={!selectedOption}
                        >
                            Next →
                        </button>

                    </div>

                )
            }

        </div >
    )
}

export default Quiz;