// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Pet Haven</h1>
      <p>Your virtual pet care world!</p>
      <div>
        <Link to="/adopt">Adopt a Pet</Link>
        <Link to="/care">Care Dashboard</Link>
        <Link to="/games">Play Mini-Games</Link>
      </div>
    </div>
  );
};

export default HomePage;
