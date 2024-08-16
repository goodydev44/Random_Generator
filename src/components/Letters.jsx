import React from "react";

const Letters = (props) => {
  const styles = props.mode ? 'black' : 'white'
  return (
    <div
      className={`mobile:text-[85px] xs:text-[96.3px] md:text-[150px] lg:text-[10rem] xl:text-[11.25rem]
      2xl:text-[195px] font-extrabold text-center px-10 text-${styles}`}
    >
      {props.letter}
    </div>
  );
};

export default Letters;
