import { useEffect, useState } from "react";
import "./DarkMode.css";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
  DEFAULT: "light",
};

const THEME_KEY = "theme";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_KEY) || THEME.DEFAULT
  );

  const switchTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  useEffect(() => {
    const cl = document.body.classList;
    if (theme === THEME.DARK) {
      cl.add(THEME.DARK);
      cl.remove(THEME.LIGHT);
    } else {
      cl.add(THEME.LIGHT);
      cl.remove(THEME.DARK);
    }
  }, [theme]);

  return <button id="darkMode" onClick={switchTheme}></button>;
}

export default DarkMode;
