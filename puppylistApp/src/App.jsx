import React, { useState } from 'react';
import { puppyList } from './data.js';
import './App.css'; // Import the CSS file for App component

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppy) {
    setFeatPupId(puppy.id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p
          onClick={() => handleClick(puppy)}
          className="puppy-name" // Apply a CSS class to the paragraph element
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div className="featured-puppy"> {/* Apply a CSS class to the div element */}
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
