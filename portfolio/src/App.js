import React from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Links from './components/Links';
import Header from './components/Header';
import ContactMe from './components/ContactMe';
import Technologies from './components/Technologies';

import 'antd/dist/antd.less';
import { BackTop } from 'antd';
import './styling/App.scss';


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
      <section id='technologies' className='technologies'>
        <Technologies />
      </section>
      <section id='contact-me' className='contact-me-section'>
        <ContactMe />
      </section>
    </div>
  );
}