import React, { useState } from "react";
import Main from "./components/Main";
import Mode from "./components/Mode";
import Options from "./components/Options";

const App = () => {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(prev => !prev)
  }
  return (
      <>
        <Main toggle={toggleMode} mode={mode} />
        <Options />
        {/* <Mode mode={mode} toggleMode={toggleMode} /> */}
      </>
    )
};

export default App;