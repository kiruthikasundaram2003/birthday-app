import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

    const [birthday, setBirthday] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        debugger

        if (!birthday || !phone || !name) {

            toast.warning(
                "Please fill all fields"
            );

            return;
        }


        if (
            birthday === "2004-06-25" &&
            phone === "9159620313" &&
            name === "forever friends"
        ) {

            toast.success(
                "❤️ Access Granted! Welcome Renikka ❤️"
            );

            setTimeout(() => {
                navigate("/home");
            }, 2000);

        }
        else {

            toast.error(
                "❌ Wrong Birthday Date or Phone Number or Screat code"
            );

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <h1>❤️Happy Birthday Renikka chlm❤️</h1>

                <p>Enter your details to unlock RenikkaVerse ✨</p>

                <label>Enter Your Birthday Date:</label>
                <input
                    type="date"
                    placeholder="Your Birthday Date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />

                <label>Enter My Phone Number:</label>
                <input
                    type="number"
                    value={phone}
                    maxLength={10}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <label>Enter the Secret code:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <button onClick={handleLogin}>
                    Login ❤️
                </button>

            </div>

        </div>

    );
}

export default Login;