import React from 'react';
import Calculator from './Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 🌸 Floating Flowers */}
      <div className="floating-flower"></div>
      <div className="floating-flower"></div>
      <div className="floating-flower"></div>
      <div className="floating-flower"></div>
      <div className="floating-flower"></div>

      {/* 🌼 Calculator Component */}
      <Calculator />
    </div>
  );
}

export default App;