import React, { useState } from "react";
import Letters from "./Letters";
import Data from "../assets/Data.json";
import { nanoid } from "nanoid";
import Button from "./Button";
import CountDownTimer from "./CountDown";
import Mode from "./Mode";

const Main = (props) => {
  const letterGridLength = () => {
    const grid = [];
    for (let len = 0; len < 5; len++) {
      grid.push(len);
    }
    return grid;
  };

  const letter = () => {
    const max = Data.length;
    const lett = Math.floor(Math.random() * (max - 0));
    return `${Data[lett]}`;
  };

  const [letterGrid, setLetterGrid] = useState(letterGridLength());
  const [startTimer, setStartTimer] = useState(false);

  const generateLetters = () => {
    setLetterGrid(letterGridLength());
    setStartTimer(true); // Start the timer when the button is clicked
  };

  const randomLetters = letterGrid.map((lg) => (
    <Letters mode={props.UI_mode} key={nanoid()} letter={letter()} />
  ));

  const styles = props.UI_mode ? "bg-[#b8daf0]" : "bg-[#112745]";

  return (
    <div
      className={`grid mobile:grid-cols-2 md:grid-cols-1 mobile:gap-3 md:gap-28l h-screen
    mobile:justify-evenly md:justify-center items-center mobile:px-5 xs:px-10 sm:px-20 md:px-2
    xl:px-5 md:py-16 ${styles}`}
    >
      <div
        className={`grid md:grid-cols-5 md:gap-[20px] lg:gap-[40px] 2xl:gap-[50pxx]`}
      >
        {randomLetters}
      </div>

      <div className="grid gap-6 justify-center bg-blue-3000 p-2 mobile:mt-[100px] md:mt-0">
        <Button mode={props.UI_mode} generate={generateLetters} />
        <CountDownTimer start={startTimer} />
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* <Mode mode={props.UI_mode} toggleMode={props.toggle} /> */}
    </div>
  );
};

export default Main;