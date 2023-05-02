import React, { useState, useEffect } from 'react';
import './randomJoke.css';

function RandomJoke() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => setJoke(`${data.setup} ${data.punchline}`));
  }, []);

  return (
    <div className='joke-wrapper'>
      <h1>Random Joke Generator</h1>
      <p className='joke'>{joke}</p>
    </div>
  );
}

export default RandomJoke;
