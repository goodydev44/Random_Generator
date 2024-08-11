import React from "react";

const Letters = (props) => {
  return (
    <div
      className="xs:text-[96.33788681px] md:text-[150px] lg:text-[169px] elg:text-[180px]
      font-extrabold text-center justify-center items-center rounded-2xl px-10"
    >
      {props.letter}
    </div>
  );
};

export default Letters;