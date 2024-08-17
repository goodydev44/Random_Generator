import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        if (counter > 0) {
            const timerId = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);

            return () => clearInterval(timerId); // Cleanup the interval on component unmount
        }
    }, [counter]);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 24 }}></span>
                </span>
                min
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": counter }}></span>
                </span>
                sec
            </div>
        </div>
    );
};

export default CountDownTimer;
