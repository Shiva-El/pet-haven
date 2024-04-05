// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AdoptionPage from './Pages/AdoptionPage';
import CareDashboard from './Pages/CareDashboard';
import MiniGames from './Pages/MiniGames';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<AdoptionPage />} />
        <Route path="/care" element={<CareDashboard />} />
        <Route path="/games" element={<MiniGames />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
