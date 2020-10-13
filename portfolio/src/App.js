import React from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Links from './components/Links';
import Header from './components/Header';

import './styling/App.scss'

export default function App() {
  return (
    <div className='app-container'>
      <div id='nav-bar-container'>
        <NavBar />
      </div>
      <section className='header-container'>
          <Header />
      </section>
      <section id='about-me' className='about-me-section'>
          <AboutMe />
      </section>
      <section id='projects' className='projects-section'>
          <Projects />
      </section>
      <section id='links' className='links-section'>
          <Links />
      </section>
    </div>
  );
}