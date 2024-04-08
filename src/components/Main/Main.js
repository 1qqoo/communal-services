import React from 'react';
import './Main.css';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Problems from '../Problems/Problems';
import Navigation from '../Navigation/Navigation';

const Main = () => {
  return (
    <main className="main">
      <Navigation />
      <About />
      <Intro />
      <Problems />
    </main>
  );
};

export default Main;
