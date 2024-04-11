// src/components/RandomQuoteGenerator/RandomQuoteGenerator.js
import React, { useState, useEffect } from 'react';
import './RandomQuoteGenerator.css';

function RandomQuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    fetchQuote();
    changeBackgroundColor();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://random-quote-generator2.p.rapidapi.com/randomQuote', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2589d0d945msh900743935f389a8p15c96ejsn5364cd142d31',
          'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com'
        }
      });
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error(error);
    }
  };

  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="RandomQuoteGenerator" style={{ backgroundColor }}>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <button onClick={fetchQuote}>Generate Quote</button>
    </div>
  );
}

export default RandomQuoteGenerator;
