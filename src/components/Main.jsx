import React, { useState } from "react";
import Letters from "./Letters";
import Data from "../assets/Data.json";
import { nanoid } from "nanoid";
import Options from "./Options";

const Main = () => {
  const [mode, setMode] = useState(true);
  const letter = () => {
    const max = Data.length;
    const lett = Math.floor(Math.random() * (max - 0));
    return `${Data[lett]}`;
  };

  const letterGridLength = () => {
    const aa = [];
    for (let i = 0; i < 5; i++) {
      aa.push(i);
    }
    return aa;
  };
  const [letterGrid, setLetterGrid] = useState(letterGridLength());

  const generate = () => {
    setLetterGrid(letterGridLength());
  };

  const randomLetters = letterGrid.map((lg) => (
    <Letters key={nanoid()} letter={letter()} />
  ));
  return (
    <main className="bg-[#b8daf0] overflow-auto">
      <div className="xs:mx-3.5">
        <Options />
        <div
          className="flex xs:flex-row-reverse md:flex-col h-screen items-center justify-evenly
                    text-center bg-[#b8daf0] pt-[20px]"
        >
          <div className="">
            <div className="flex xs:flex-col md:flex-row md:gap-[20px] lg:gap-[40px] elg:gap-[px]">
              {randomLetters}
            </div>
          </div>
          <button
            onClick={generate}
            className="border-none rounded-md font-bold text-2xl py-1.5
              w-[180px] bg-[#1f1cd2] text-white mt-[70px] hover:bg-[#0400ff]
              transition duration-[200ms]"
          >
            GENERATE
          </button>
        </div>
      </div>
    </main>
  );
};
export default Main;
