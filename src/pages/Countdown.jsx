import { useEffect, useState } from "react";
import "../styles/Countdown.css";
import { useNavigate } from "react-router-dom";

function Countdown() {
    const navigate = useNavigate();

    const targetDate = new Date("June 24, 2026 01:35:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {

        const timer = setInterval(() => {

            const now = new Date().getTime();

            const distance = targetDate - now;

            if (distance <= 0) {

                clearInterval(timer);

                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });

                // Wait 3 seconds and go to Login Page
                setTimeout(() => {

                    navigate("/login");

                }, 3000);

                return;
            }

            setTimeLeft({

                days: Math.floor(distance / (1000 * 60 * 60 * 24)),

                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24))
                    / (1000 * 60 * 60)
                ),

                minutes: Math.floor(
                    (distance % (1000 * 60 * 60))
                    / (1000 * 60)
                ),

                seconds: Math.floor(
                    (distance % (1000 * 60))
                    / 1000
                )

            });

        }, 1000);

        return () => clearInterval(timer);

    }, [navigate]);





    return (
        <>

            {
                timeLeft.days === 0 &&
                    timeLeft.hours === 0 &&
                    timeLeft.minutes === 0 &&
                    timeLeft.seconds === 0 ?

                    <div className="birthday-reached">

                        <h1>🎉 Happy Birthday Renikka ❤️</h1>

                        <h2>✨ Welcome to RenikkaVerse ✨</h2>

                        <p>
                            Redirecting...
                        </p>

                    </div>

                    :

                    <div className="countdown-page">
                        <h1>Advance Happy Birthday Thangam❤️</h1>
                        <div className="countdown-container">
                            <div className="time-box">
                                <h2>{timeLeft.days}</h2>
                                <p>Days</p>
                            </div>
                            <div className="time-box">
                                <h2>{timeLeft.hours}</h2>
                                <p>Hours</p>
                            </div>
                            <div className="time-box">
                                <h2>{timeLeft.minutes}</h2>
                                <p>Minutes</p>
                            </div>
                            <div className="time-box">
                                <h2>{timeLeft.seconds}</h2>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Countdown;