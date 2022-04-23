import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./App/components/App";
import Home from "./App/components/pages/Home";
import About from "./App/components/pages/About";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <Router>
      <Default mode={mode} setMode={setMode} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
