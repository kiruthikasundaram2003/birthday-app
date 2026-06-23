import "../styles/Home.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import { useEffect, useState } from "react";

function Home() {

  const birthDate = new Date("2004-06-25T00:00:00");

  const [age, setAge] = useState({
    years: 0, months: 0, days: 0,
    hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - birthDate;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours   = Math.floor(minutes / 60);
      const totalDays = Math.floor(hours / 24);

      let years  = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth()    - birthDate.getMonth();
      if (months < 0) { years--; months += 12; }

      setAge({ years, months, days: totalDays, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">

      <FloatingHearts />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1>
          <Typewriter
            words={[
              "Happy Birthday Renikka ❤️",
              "Welcome To RenikkaVerse ✨",
              "6 Years Of Beautiful Friendship 🌸"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={500}
          />
        </h1>

        <h2>Made with love by Kiruthika 💖</h2>

        <div className="age-card">

          <h2>💖 My Precious Renikka Chlm 💖</h2>
          <h3>🌸 Born on 25 June 2004 🌸</h3>

          <p>🎂 {age.years} Years Old</p>
          <p>🌷 {age.months} Months</p>
          <p>☀️ {age.days.toLocaleString()} Days on Earth</p>
          <p>⏰ {age.hours.toLocaleString()} Hours of Joy</p>
          <p>💫 {age.minutes.toLocaleString()} Minutes of Smiles</p>
          <p>✨ {age.seconds.toLocaleString()} Seconds of Blessings</p>

          <br />

          <p>
            Every second since 25 June 2004 has made you more beautiful,
            more kind, and more special. ❤️
          </p>
          <p>
            🌸 Thank you for these 6 beautiful years of friendship 🌸
          </p>

        </div>
      </motion.div>
    </div>
  );
}

export default Home;