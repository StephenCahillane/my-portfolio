import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter instead of Router
import './App.css';
import { Home } from './Home';
import Websites from './Websites';
import Chat from './Chat';
import Vision from './Vision';
import RegQuest from './RegQuest';

function App() {
  return (
    <div>
      <Router> {/* BrowserRouter is used to wrap the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/regQuest" element={<RegQuest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
