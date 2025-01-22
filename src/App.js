import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter instead of Router
import './App.css';
import { Home } from './Home';
import Chat from './Chat';
import Vision from './Vision';
import RegQuest from './RegQuest';
import Study from './StudyCenter';
import Tasks from './Tasks';
import VisionBoard from './VisionBoard';
import Routine from './Routine';
import Future from './Future';
import Budget from './Budget';


function App() {
  return (
    <div>
      <Router> {/* BrowserRouter is used to wrap the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/regQuest" element={<RegQuest />} />
          <Route path="/studyCenter" element={<Study />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/visionBoard" element={<VisionBoard />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/future" element={<Future />} />
          <Route path="/Budget" element={<Budget />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
