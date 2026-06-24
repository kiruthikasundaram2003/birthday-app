import "../styles/Media.css";

function Media() {
    return (
        <div className="media-page">

            <h1>🎵📹 Our Media Room ❤️</h1>

            {/* Music Section */}

            <div className="media-card">

                <h2>🎵 Songs 💖</h2>
                <div>
                    <audio controls>
                        <source src="https://res.cloudinary.com/dyabbqxqu/video/upload/v1782291605/music2_hyvasl.webm" type="audio/webm" />
                    </audio>
                </div>
                {/* <h2>🎶 Until I Found You 🌸</h2> */}

                <audio controls>
                    <source src="https://res.cloudinary.com/dyabbqxqu/video/upload/v1782291437/music1_qewlih.webm" type="audio/webm" />
                </audio>

            </div>

            {/* Videos Section */}

            <div className="media-card">

                <h2>💖 Special Moments</h2>

                <video controls>
                    <source src={`${import.meta.env.BASE_URL}video1.mp4`} type="video/mp4" />
                </video>

                {/* <h2>✨ Funny Memories</h2> */}

                <video controls>
                    <source src={`${import.meta.env.BASE_URL}video2.mp4`} type="video/mp4" />
                </video>

                {/* <h2>🌷 College Memories</h2> */}

                <video controls>
                    <source src={`${import.meta.env.BASE_URL}video3.mp4`} type="video/mp4" />
                </video>



                <video controls>
                    <source src={`${import.meta.env.BASE_URL}video4.mp4`} type="video/mp4" />
                </video>

                <video controls>
                    <source src={`${import.meta.env.BASE_URL}video5.mp4`} type="video/mp4" />
                </video>

                <video controls>
                    <source src={`${import.meta.env.BASE_URL}video6.mp4`} type="video/mp4" />
                </video>

            </div>

        </div>
    );
}

export default Media;