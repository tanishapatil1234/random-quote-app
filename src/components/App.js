// src/App.js
import React from 'react';
import './App.css';
import RandomQuoteGenerator from './components/RandomQuoteGenerator/RandomQuoteGenerator';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <RandomQuoteGenerator />
    </div>
  );
}

export default App;
