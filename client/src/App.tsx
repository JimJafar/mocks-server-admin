import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import RoutePage from "./pages/Route";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/route/:name" element={<RoutePage />} />
    </Routes>
  );
}

export default App;
