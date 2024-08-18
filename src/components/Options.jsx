import React from "react";
import CountDownTimer from "./CountDown";

const Options = () => {
  return (
    <div
      className="absolute border-[2.5px] border-blue-400 px-6 py-4 rounded-lg font-bold
      bg-blue-300 mobile:mt-2 mobile:ml-2 xs:mt-3 xs:ml-0 top-0 xs:left-3.5 text-black"
    >
      <h3 className="text-xl">TIMER</h3>
      <hr className="mb-1" />
      <CountDownTimer />
    </div>
  );
};

export default Options;
