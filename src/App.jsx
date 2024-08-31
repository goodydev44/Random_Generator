import React, { useState } from "react";
import Main from "./components/Main";

const App = () => {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(prevMode => !prevMode)
  }
  return (
        <Main toggle={toggleMode} UI_mode={mode} />
    )
};

export default App;