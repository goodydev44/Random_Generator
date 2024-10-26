import React, { useState, useRef, useEffect } from "react";
import Letters from "./Letters";
import Data from "../assets/Data.json";
import { nanoid } from "nanoid";
import Button from "./Button";
import CountDownTimer from "./CountDown";
import TimerControls from "./TimerControls";
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
  const [randomLetters, setRandomLetters] = useState([]);
  const [startTimer, setStartTimer] = useState(false);
  const playTimer = useRef(true);
  const [isPlaying, setIsPlaying] = useState(playTimer.current);
  const mode = useRef(true);
  const [isMode, setIsMode] = useState(mode.current);

  useEffect(() => {
    // Generate letters initially when component mounts
    setRandomLetters(
      letterGrid.map((lg) => (
        <Letters mode={isMode} key={nanoid()} letter={letter()} />
      ))
    );

  }, [letterGrid, isMode]);

  const togglePlay = () => {
    playTimer.current = !playTimer.current;
    setIsPlaying(playTimer.current);
  };

  const toggleMode = () => {
    mode.current = !mode.current;
    setIsMode(mode.current)
  };

  const generateLetters = () => {
    setLetterGrid(letterGridLength());
    setStartTimer(true); // Start the timer when the button is clicked
    setRandomLetters(
      letterGrid.map((lg) => (
        <Letters mode={isMode} key={nanoid()} letter={letter()} />
      ))
    );
  };

  const styles = isMode ? "bg-[#b8daf0]" : "bg-[#112745]";

  return (
    <div
      className={`grid mobile:grid-cols-2 md:grid-cols-1 mobile:gap-3 md:gap-28l min-h-screen
    mobile:justify-evenly md:justify-center items-center mobile:px-5 xs:px-10 sm:px-20 md:px-2
    xl:px-5 md:py-16 ${styles}`}
    >
      <div
        className={`grid md:grid-cols-5 md:gap-[20px] lg:gap-[40px] 2xl:gap-[50pxx]`}
      >
        {randomLetters}
      </div>

      <div className="grid gap-4 justify-center bg-blue-3000 p-2 mobile:mt-[100px] md:mt-0 text-black">
        <Button mode={isMode} generate={generateLetters} />
        <CountDownTimer start={startTimer} />
        {/* <TimerControls play={isPlaying} togglePlay={togglePlay} /> */}
      </div>
      {/* <Mode mode={isMode} toggleMode={toggleMode} /> */}
    </div>
  );
};

export default Main;
