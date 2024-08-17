import React from "react";

const Options = () => {
  return (
    <div
      className="absolute border-[2.5px] border-blue-400 px-6 py-4 rounded-lg
      bg-blue-300 mobile:mt-2 mobile:ml-2 xs:mt-3 xs:ml-0 top-0 xs:left-3.5 text-black"
    >
      <h3 className="text-[16px]">Case Type:</h3>
      <select
        className="border-[2px] border-blue-400 px-2 py-1 text-[18px] rounded-full
        outline-none bg-blue-300"
      >
        <option className="mobile:text-xs xs:text-[18px]" value="upper-case">
          Upper Case
        </option>
        <option className="mobile:text-xs xs:text-[18px]" value="lower-case">
          Lower Case
        </option>
      </select>
    </div>
  );
};

export default Options;
