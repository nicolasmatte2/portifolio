import { useState } from "react";
import { DarkMode } from "./components/DarkMode/DarkMode";
import GlobalStyle from "./styles/globals";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));
  return (
    <>
      <GlobalStyle darkmode={darkMode} />
      <DarkMode setDarkMode={setDarkMode} />
    </>
  );
}

export default App;
