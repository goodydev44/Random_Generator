import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Mode = ({mode, toggleMode}) => {
  return (
    <button className="absolute text-2xl right-3 top-2.5">
      {
        mode ? 
        <FaMoon 
        onClick={toggleMode}
        className='text-black'
        /> :
        <FaSun
        onClick={toggleMode}
        className='text-white'
        />
      }
    </button>
  );
};

export default Mode;
