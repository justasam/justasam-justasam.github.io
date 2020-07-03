import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
