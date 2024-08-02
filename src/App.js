import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import SpareParts from './components/SpareParts';
//import SpareParts from './components/SpareParts';
function App() {
  return (
    <div>
      <p>Jambo, Karibu Sinza Kijweni Fixit</p>
      <Navbar/>
      <SpareParts></SpareParts>
    </div>
  );
}

export default App;
