import React from 'react';
import './Main.css';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Problems from '../Problems/Problems';

const Main = () => {
  return (
    <main className="main">
      <About />
      <Intro />
      <Problems />
    </main>
  );
};

export default Main;
