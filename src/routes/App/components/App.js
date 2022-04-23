import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/_app.scss";

function Default() {
  const [mode, setMode] = useState("light");
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
          onClick={() =>
            mode === "light" ? setMode("dark") : setMode("light")
          }
        >
          <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
        </button>
      </div>
    </div>
  );
}

export default Default;
