import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import { BrowserRouter as Router } from 'react-router-dom';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient-top" />
        <div className="gradient-bot" />
        <Header />
        <Sidebar />
        <Footer />
        <Cursor />
        <Work />
      </div>
    </Router>
  );
}

export default App;
