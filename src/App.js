import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import About from './pages/About';
import Work from './pages/Work';

import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <Router>
      <div className="App">
        <div className="gradient-top" />
        <div className="gradient-bot" />
        <Header />
        <Sidebar />
        <Footer />

        {!isMobile && <Cursor />}
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/">
            <Work isMobile={isMobile} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
