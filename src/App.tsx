import { useState } from "react";
import { DarkMode } from "./components/DarkMode/DarkMode";
import GlobalStyle from "./styles/globals";

import { Frame } from "./components/Header/Header";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));
  return (
    <>
      <GlobalStyle darkmode={darkMode} />
      <DarkMode setDarkMode={setDarkMode} />
      <Frame />
    </>
  );
}

export default App;
