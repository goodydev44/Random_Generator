import React from "react";

const Mode = () => {
  return (
    <div className="flex mt-2.5 justify-evenly items-center">
      <p className="text-lg">Mode:</p>
      <div
        className="flex p-1 h-6 w-12 bg-blue-900 items-center rounded-full"
      >
        <div className="h-4 w-4 bg-blue-600 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Mode;
