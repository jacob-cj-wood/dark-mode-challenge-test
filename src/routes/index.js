import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./App/components/App";
import Home from "./App/components/pages/Home";
import About from "./App/components/pages/About";
const DarkMode = createContext();

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <Router>
      <DarkMode.Provider value={[mode, setMode]}>
        <Default />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </DarkMode.Provider>
    </Router>
  );
}

export { App, DarkMode };
