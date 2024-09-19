import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter instead of Router
import './App.css';
import { Home } from './Home';
import Websites from './Websites';


function App() {
  return (
    <div>
      <Router> {/* BrowserRouter is used to wrap the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
