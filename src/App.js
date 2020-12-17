import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Gnb, Routes, Footer } from "./pages/Index";
import { ScrollTop } from "./components/ScrollTopButton";

function App() {
  return (
    <Router>
      <Gnb />
      <ScrollTop />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
