import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import About from './pages/About';
import Work from './pages/Work';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/">
            <Work />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
