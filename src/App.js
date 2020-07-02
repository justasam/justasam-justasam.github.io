import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
