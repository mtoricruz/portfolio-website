import React from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Links from './components/Links';

export default function App() {
  return (
    <div className='app-container'>
      <div id='nav-bar-container'>
        <NavBar />
      </div>
      <div id='about-me-container'>
        <AboutMe />
      </div>
      <div id='projects-container'>
        <Projects />
      </div>
      <div id='links-container'>
        <Links />
      </div>
    </div>
  );
}