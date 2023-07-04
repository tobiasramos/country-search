import { useEffect, useState } from "react";
import "./header.css";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem("darkMode");
    if (currentMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", !isDarkMode);
  };

  return (
    <header className="header-container">
      <h2>Qual país?</h2>
      <div
        className={`dark-mode-toggle ${isDarkMode ? "dark" : "light"}`}
        onClick={toggleDarkMode}
      >
        <MdOutlineDarkMode className='icon' />
        <span>{isDarkMode ? "Modo Claro" : "Modo Escuro"}</span>
      </div>
    </header>
  );
};

export default Header;
