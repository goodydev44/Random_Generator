import React, { useState, useEffect } from "react";

const CountDownTimer = (props) => {
  const [seconds, setSeconds] = useState(60);
  const [min, setMin] = useState(1);

  useEffect(() => {
    if (props.start) {
      if (seconds > 0) {
        const timerId = setInterval(() => {
          setSeconds((prevSec) => prevSec - 1);
        }, [1000]);

        return () => clearInterval(timerId); // Cleanup the interval on component unmount
      } else if (min > 0) {
        setMin((prevMin) => prevMin - 1);
        setSeconds(59);
      }
    }
  }, [props.start, seconds, min]);

  return (
    <div
      className={`grid grid-flow-col gap-5 auto-cols-max text-center justify-center text-black font-extrabold`}
    >
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": min }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDownTimer;