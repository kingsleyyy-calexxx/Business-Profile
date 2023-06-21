import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Intro from './Components/Intro';
import Target from './Components/Target';
import Goal from './Components/Goal';
import Profile from './Components/Profile';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Intro" element={<Intro />} />
              <Route path="/Target" element={<Target />} />
              <Route path="/Goal" element={<Goal/>}/>
              <Route path="/Profile" element={<Profile/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
