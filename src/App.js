import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CarouselItem from './components/CarouselItem';
import Cursor from './components/Cursor';

import { BrowserRouter as Router } from 'react-router-dom';

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
        <CarouselItem
          title='01 FX TRADE MOBILE APP'
          images={['https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1579&q=80']}
          description='A mobile app for financial company built with React Native, antd graphs and expo.'
          date='2017-03-06'
          position='top'
        />
        <CarouselItem
          title='02 SOME OTHER PROJECT NAME'
          images={['https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1579&q=80']}
          description='A mobile app for financial company built with React Native, antd graphs and expo.'
          date='2017-03-06'
          position='center'
        />
        <CarouselItem
          title='03 ANOTHER PROJECT TEST'
          images={['https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1579&q=80']}
          description='A mobile app for financial company built with React Native, antd graphs and expo.'
          date='2017-03-06'
          position='bot'
        />
      </div>
    </Router>
  );
}

export default App;
