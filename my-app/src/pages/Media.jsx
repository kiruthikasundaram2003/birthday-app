import "../styles/Media.css";

function Media() {
    return (
        <div className="media-page">

            <h1>🎵📹 Our Media Room ❤️</h1>

            {/* Music Section */}

            <div className="media-card">

                <h2>🎵 Songs 💖</h2>

                <audio controls>
                    <source src="/music2.webm" type="audio/mp3" />
                </audio>

                {/* <h2>🎶 Until I Found You 🌸</h2> */}

                <audio controls>
                    <source src="/music1.webm" type="audio/mp3" />
                </audio>

            </div>

            {/* Videos Section */}

            <div className="media-card">

                <h2>💖 Special Moments</h2>

                <video controls>
                    <source src="/video1.mp4" type="video/mp4" />
                </video>

                {/* <h2>✨ Funny Memories</h2> */}

                <video controls>
                    <source src="/video2.mp4" type="video/mp4" />
                </video>

                {/* <h2>🌷 College Memories</h2> */}

                <video controls>
                    <source src="/video3.mp4" type="video/mp4" />
                </video>



                <video controls>
                    <source src="/video4.mp4" type="video/mp4" />
                </video>

                <video controls>
                    <source src="/video5.mp4" type="video/mp4" />
                </video>

                <video controls>
                    <source src="/video6.mp4" type="video/mp4" />
                </video>

            </div>

        </div>
    );
}

export default Media;