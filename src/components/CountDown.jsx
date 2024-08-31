import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(10);

  const [min, setMin] = useState(1);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSec) => prevSec - 1);
      }, [1000]);

      return () => clearInterval(timerId); // Cleanup the interval on component unmount
    } else if (min > 0) {
      setMin((prevMin) => prevMin - 1);
      setSeconds(9);
    }
  }, [seconds, min]);

  return (
    <div
      className={`absolute grid grid-flow-col gap-5 text-center auto-cols-max text-black font-extrabold
                    mobile:left-[10px] xs:left-[65px] sm:left-[155px] md:bottom-[5%] md:left-[46.7%]
                    lg:left-[46%] xl:left-[46%] mobile:bottom-[38%] xs:bottom-[30%]`}
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
