import "./App.css";
import VendingMachine from "./components/VendingMachine/VendingMachine";
import YearInfo from "./components/YearInfo/YearInfo";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div>
      <nav>
        <DarkMode></DarkMode>
      </nav>

      <YearInfo></YearInfo>
      <VendingMachine></VendingMachine>
    </div>
  );
}

export default App;
