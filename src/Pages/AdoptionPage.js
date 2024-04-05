// AdoptionPage.js

import React, { useState } from 'react';

const AdoptionPage = () => {
  const [petType, setPetType] = useState(''); // For pet type selection

  const handleAdoption = (e) => {
    e.preventDefault();
    console.log('Adopting:', petType); // Placeholder for now
  };

  return (
    <div>
      <h2>Adopt a Pet</h2>
      <form onSubmit={handleAdoption}>
        <label>
          Choose a pet:
          <select value={petType} onChange={(e) => setPetType(e.target.value)}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            {/* Add more pet options */}
          </select>
        </label>
        <button type="submit">Adopt</button>
      </form>
    </div>
  );
};

export default AdoptionPage;
