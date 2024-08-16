import React, { useState } from "react";
import Letters from "./Letters";
import Data from "../assets/Data.json";
import { nanoid } from "nanoid";
import Button from "./Button";

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
    <Letters mode={props.mode} key={nanoid()} letter={letter()} />
  ));
  
  const styles = props.mode ? "#b8daf0" : "#112745";

  return (
    <div
      className={`grid h-screen text-center items-center justify-center bg-[${styles}]`}
    >
      <div
        className={`grid md:grid-cols-${5} md:gap-[20px] lg:gap-[40px] 2xl:gap-[60px]
        mobile:-mr-[100px] xs:-mr-[150px] sm:-mr-[200px] md:-mr-0 md:-mt-32`}
      >
        {randomLetters}
      </div>
      <Button mode={props.mode} generateLetters={generateLetters} />
    </div>
  );
};
export default Main;
