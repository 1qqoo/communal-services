import React from 'react';
import './Main.css';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Intro from '../Intro/Intro';

const Main = () => {
  return (
    <main className="main">
      <Navigation />
      <About />
      <Intro />
    </main>
  );
};

export default Main;
