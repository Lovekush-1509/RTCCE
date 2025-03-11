import React from 'react';
import { StateProvider } from "./Context/usecontext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Maineditor from './components/Maineditor';
import './App.css';

function App() {
  return (
    <StateProvider>
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/mb" element={<Maineditor />} />
    </Routes>
  </div>
</Router>
</StateProvider>
  );
}

export default App;
