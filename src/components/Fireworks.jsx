import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

function FireworksEffect() {

    const ref = useRef(null);

    useEffect(() => {

        const fireworks = new Fireworks(ref.current, {

            rocketsPoint: {
                min: 0,
                max: 100
            },

            hue: {
                min: 0,
                max: 360
            },

            delay: {
                min: 15,
                max: 30
            },

            speed: 3,

            acceleration: 1.05,

            friction: 0.95,

            gravity: 1.5,

            particles: 100,

            trace: 5,

            explosion: 5,

            autoresize: true

        });

        fireworks.start();

        return () => fireworks.stop();

    }, []);

    return (
        <div
            ref={ref}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                pointerEvents: "none"
            }}
        />
    );
}

export default FireworksEffect;