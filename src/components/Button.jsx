import React from "react";

const Button = (props) => {
  const styles = props.mode ? 'bg-[#1f1cd2] hover:bg-[#0400ff]' :
                              'bg-[#0400ff] hover:bg-[#1f1cd2]'
  return (
    <button
      onClick={props.generate}
      className={`border-none rounded-full font-bold py-1.5 transition duration-[200ms] mobile:text-[20px] xs:text-2xl
            mobile:px-5 xs:px-7 md:px-14 text-white ${styles}`}
    >
      GENERATE
    </button>
  );
};

export default Button;