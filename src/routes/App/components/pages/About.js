import React, { useContext } from "react";
import { DarkMode } from "../../../index";

const About = () => {
  const [mode] = useContext(DarkMode);
  return (
    <div className={mode === "dark" ? "container dark-mode" : "container"}>
      <p>this is a test</p>
    </div>
  );
};

export default About;
