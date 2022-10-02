import "./DarkMode.css";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const THEME_KEY = "theme";

function DarkMode() {
  let theme = localStorage ? localStorage.getItem(THEME_KEY) : "";

  document.body.classList.add(
    theme === LIGHT_THEME || theme === DARK_THEME ? theme : LIGHT_THEME
  );

  function switchTheme() {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

    document.body.classList.replace(theme, newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    theme = newTheme;
  }

  return <button id="darkMode" onClick={switchTheme}></button>;
}

export default DarkMode;
