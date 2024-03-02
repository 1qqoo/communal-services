import React from 'react';
import './Main.css';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';

const Main = () => {
  return (
    <main className='main'>
      <Navigation />
      <About />
    </main>
  );
};

export default Main;
