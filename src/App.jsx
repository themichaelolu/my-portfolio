// src/App.jsx

import React from 'react';
import Portfolio from './portfolio.jsx';
import './index.css' // Import your global CSS (which now includes Tailwind)

function App() {
  // This wrapper sets the global theme styles (font, background color, and text color)
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-200">
      <Portfolio />
    </div>
  );
}

export default App;