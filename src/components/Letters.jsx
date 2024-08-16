import React from "react";

const Letters = (props) => {
  return (
    <div
      className="text-[20rem] font-extrabold text-center tracking-[6rem]"
    >
      {props.letter}
    </div>
  );
};

export default Letters;