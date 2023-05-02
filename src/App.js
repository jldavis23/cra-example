import React, { useState, useEffect } from 'react';

function RandomJoke() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => setJoke(`${data.setup} ${data.punchline}`));
  }, []);

  return (
    <div>
      <h1>Random Joke Generator</h1>
      <p>{joke}</p>
    </div>
  );
}

export default RandomJoke;
