import { useState } from "react";

function ThemeToggle() {

  const [dark, setDark] = useState(true);

  const toggleTheme = () => {

    document.body.classList.toggle("light-theme");

    setDark(!dark);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;