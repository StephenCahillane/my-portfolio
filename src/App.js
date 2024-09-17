import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter instead of Router
import './App.css';
import { Home } from './Home';



function App() {
  return (
    <div>
      <Router> {/* BrowserRouter is used to wrap the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
