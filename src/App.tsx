import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
