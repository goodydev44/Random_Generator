import React from "react";
import Mode from "./Mode";

const Options = () => {
  return (
    <div
      className="absolute border-[2.5px] border-blue-400 px-6 py-4 mt-3.5
                rounded-lg bg-blue-300"
    >
      <h3 className="text-[19px] ml-2.5">Case Type:</h3>
      <select
        className="border-[2px] border-blue-400 px-2 py-1 text-[18px] rounded-md
        outline-none bg-blue-300"
        name=""
        id=""
      >
        <option className="" value="upper-case">
          Upper Case
        </option>
        <option className="" value="lower-case">
          Lower Case
        </option>
      </select>
      <Mode />
    </div>
  );
};

export default Options;
