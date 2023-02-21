import { useState } from "react";
import { DarkMode } from "./components/DarkMode/DarkMode";
import GlobalStyle from "./styles/globals";

import { Board } from "./components/Board/Board";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));
  return (
    <>
      <GlobalStyle darkmode={darkMode} />
      <DarkMode setDarkMode={setDarkMode} />
      <Board />
    </>
  );
}

export default App;
