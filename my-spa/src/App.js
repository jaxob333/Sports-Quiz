import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              Learn React
            </a>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
