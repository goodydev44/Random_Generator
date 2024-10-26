import React from "react";
import { BiRefresh } from "react-icons/bi";
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";

const TimerControls = (props) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <BiRefresh className="cursor-pointer text-4xl rounded-full hover:bg-slate-400 transition" />
      {
        props.play ? 
        <FaRegPauseCircle onClick={props.togglePlay} className="iconStyle1" /> :
        <FaRegPlayCircle onClick={props.togglePlay} className="iconStyle1" />
      }
    </div>
  );
};

export default TimerControls;
