import { useState, createContext } from "react";
import "./App.css";
import VendingMachine from "./components/VendingMachine";
import YearInfo from "./components/YearInfo";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  }

  return (
    <div className={theme}>
      <nav>
        <button className="dark-mode--flip-button" onClick={toggleTheme}>
          Switch to {theme == "light" ? "dark" : "light"} mode
        </button>
      </nav>

      <YearInfo></YearInfo>
      <VendingMachine></VendingMachine>
    </div>
  );
}

export default App;
