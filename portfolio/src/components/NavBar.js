import React from 'react';
import '../styling/NavBar.scss';

export default function NavBar(){
    return(
        <div className='site-nav'>
            <a href='about-me-container'>About Me</a>
            <a href='projects-container'>Projects</a>
            <a href='links-container'>Links</a>
            <a href='#'>Contact Me</a>
        </div>
    )
}