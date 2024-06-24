import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./Menue";
import Guess from "./Guess";
import Name from "./Name";
import "./App.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Menu />} />
        <Route path="/Guess" element={<Guess />} />
        <Route path="/Name" element={<Name />} />
      </Routes>
    </div>
  );
};

export default App;
