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
        <div>
          <Header />
        </div>
      </section>
      <section id='about-me-container'>
        <div>
          <AboutMe />
        </div>
      </section>
      <section id='projects-container'>
        <div>
          <Projects />
        </div>
      </section>
      <section id='links-container'>
        <div>
          <Links />
        </div>
      </section>
    </div>
  );
}