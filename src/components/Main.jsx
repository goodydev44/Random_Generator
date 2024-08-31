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

  const generateLetters = () => {
    setLetterGrid(letterGridLength());
  };

  const randomLetters = letterGrid.map((lg) => (
    <Letters mode={props.UI_mode} key={nanoid()} letter={letter()} />
  ));

  const styles = props.UI_mode ? "bg-[#b8daf0]" : "bg-[#112745]";

  return (
    <div className={`grid h-screen text-center items-center ${styles}`}>
      <div
        className={`grid md:grid-cols-5 md:gap-[20px] lg:gap-[40px] 2xl:gap-[60px]
        mobile:ml-[100px] xs:ml-[150px] sm:ml-[200px] md:mx-auto md:mb-32 text-center`}
      >
        {randomLetters}
      </div>
      <Button mode={props.UI_mode} generate={generateLetters} />
      <CountDownTimer />
      {/* <Mode mode={props.UI_mode} toggleMode={props.toggle} /> */}
    </div>
  );
};
export default Main;
