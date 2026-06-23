import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

    return (

        <nav>

            <h1>RenikkaVerse ❤️</h1>

            <ul>

                <li>
                    <Link to="/home">Home</Link>
                </li>

                
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>


                {/* <li>
                    <Link to="/gift">Gift</Link>
                </li> */}
                <li>
                    <Link to="/reasons">Reasons</Link>
                </li>
                <li>
                    <Link to="/media">Media</Link>
                </li>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>

                <li>
                    <Link to="/surprise">Final Surprise</Link>
                </li>
            </ul>

        </nav>

    );
}

export default Navbar;