import React, { useState } from "react";
import Letters from "./Letters";
import Data from "../assets/Data.json";
import { nanoid } from "nanoid";
import Options from "./Options";
import CountDownTimer from "./CountDown";

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
    <main className="bg-[#b8daf0] overflow-auto text-black">
      <div className="">
        <Options />
        <div
          className="flex xs:flex-row-reverse md:flex-col h-screen items-center justify-evenly
                    text-center bg-[#b8daf0] pt-[20px]"
        >
          <div className="grid grid-cols-5">
              {randomLetters}
          </div>
          <CountDownTimer/>
          <button
            onClick={generate}
            className="rounded-md font-bold text-2xl px-10 py-5
              bg-[#1f1cd2] text-white hover:bg-[#0400ff]
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
