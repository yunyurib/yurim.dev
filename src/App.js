import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Gnb, Routes } from "./pages/Index";

function App() {
  return (
    <Router>
      <Gnb />
      <Routes />
    </Router>
  );
}

export default App;
