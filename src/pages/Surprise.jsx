import "../styles/Surprise.css";
import FloatingHearts from "../components/FloatingHearts";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import FireworksEffect from "../components/Fireworks";
import { useState, useEffect } from "react";


function Surprise() {
    const { width, height } = useWindowSize();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);
    return (

        <div className="surprise-page">

            <FireworksEffect />

            <Confetti
                width={width}
                height={height}
                recycle={true}
                numberOfPieces={150}
            />

            <FloatingHearts />

            {/* Background Music */}
            <audio autoPlay loop>
                <source src="https://res.cloudinary.com/dyabbqxqu/video/upload/v1782291676/finalsong_e7sewo.mp3" type="audio/mp3" />
            </audio>

            {/* Stars */}
            {/* <div className="stars">
                ✨ ✨ ✨ ✨ ✨
            </div> */}

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

                <p> Dear Sandakari ❤️,
                    <br /><br />
                    Happy Birthday to the most wonderful person in my life. 🌸 Thank you for always being with me, supporting me and creating beautiful memories together.
                    <br /><br />
                    Una pathi sollanum na.. atha yanala varthaiyala sollu mudiyala....yapdi sollurathunu kuda theriyala....Because you are more special to me than words can ever express. ❤️...nee yallarukum spl tha but yanaku nee matum tha romba spl....yapdi epdi ooru relationship namakula vanthuchunu yanaku innum theriyala...unaku therarucha sollu chlm❤️
                    <br /><br />
                    School days apdi ooru sanda pootu..Sanda vanthu..kadasila epdi frnds sa irupoom nu nenaikala...ooru vela nama apa sanda pootathutha .....nama epdi frnds sa iruka kuda reason na irukalam nu nenaikuren...and uta romba mukiyam ma onu sollanum...last ta solluren..✨
                    <br /><br /> And once again, Happy Birthday my dear Thangam❤️.....Etha birthday la iruthu nee nenachathu , Aasapatathu yallam unaku nadaka yanudaya Wishes....Na uta yapayum sollurathu tha ....unaku yapayavathu yarum illanu feel panrapaa....nee apdi feel panamata..apdi ooru veala yarum illa na...kavalapada ...Unakaga na iruken..unudaya Happy and sad la yapavum irupen..ok va thangam...so yapayum smile panitu iru😊...unudaya etha spl day va nalla enjoy panu...sorry thangam ..unudaya etha spl day la ukuda iruka mudiyala yanala🥺....atha yanku kastam ma iruku..😢😢 <br /><br /> Namakula irukura etha bond yapayum epdi irukanum nu yanudaya verupam🥰🥹...Sorry Sorry...yathuku Sorry na School Days la uta Sanda pootathuku😅...Ethula yathavathu thapu irutha sorry solla maten😜..Happy ya iru ..Santhoosam ma iru.....Vayasakuthu vera unaku....sekiram ma marriage invitation anupu..athuku na romba wait panren...Love you so much chlm❤️❤️❤️
                    <br /><br />
                    No matter where life takes us, our friendship will always remain special. ✨
                    <br /><br />
                    🌷 Thank You For These 6 Beautiful Years ❤️
                    <br /><br />
                    With lots of love,
                    <br /> Kiruthika 💖
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