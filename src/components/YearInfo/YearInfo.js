import { useEffect, useState } from "react";
import "./YearInfo.css";

const CURRENT_YEAR = new Date().getFullYear();

function YearInfo() {
  const [year, setYear] = useState(CURRENT_YEAR);
  const [yearInfo, setYearInfo] = useState([]);

  useEffect(() => {
    fetch(`http://numbersapi.com/${year}/year?json`)
      .then((response) => response.json())
      .then((data) => setYearInfo(data));
  }, []);

  function handleChange(event) {
    setYear(event.target.value);
  }

  function setRandomYear() {
    setYear(Math.floor(Math.random() * (CURRENT_YEAR + 1)));
  }

  const years = Array.from(Array(CURRENT_YEAR + 1).keys()).map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));

  return (
    <section>
      <h1 className="year-info--title">Year Information</h1>

      <label className="year-info--select-label">Select the Year:</label>

      <select
        className="year-info--select"
        value={year}
        onChange={handleChange}
      >
        {years}
      </select>

      <h3 className="year-info--or">OR</h3>

      <button className="year-info--random-button" onClick={setRandomYear}>
        RANDOMLY SELECT THE YEAR
      </button>

      <div className="year-info--text-container">
        <p className="year-info--text">{yearInfo.text}</p>
      </div>
    </section>
  );
}

export default YearInfo;
