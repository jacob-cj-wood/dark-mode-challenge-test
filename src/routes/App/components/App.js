import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/_app.scss";
import { DarkMode } from "../../index";

function changeMode(mode, setMode) {
  if (mode === "light") {
    setMode("dark");
    localStorage.setItem("screenMode", "dark");
  } else {
    setMode("light");
    localStorage.setItem("screenMode", "light");
  }
}

function Default() {
  const [mode, setMode] = useContext(DarkMode);

  return (
    <div className={mode === "dark" ? "app dark-mode" : "app"}>
      <div className="level">
        <div>
          <h1 className="title">
            <Link to="/">Dark Mode</Link>
          </h1>
        </div>

        <div className="navigation">
          <Link to="/about">About</Link>
        </div>

        <button
          className="app__dark-mode-btn icon level-right"
          onClick={() => changeMode(mode, setMode)}
        >
          <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
        </button>
      </div>
    </div>
  );
}

export default Default;
