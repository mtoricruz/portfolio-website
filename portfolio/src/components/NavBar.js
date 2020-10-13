import React from 'react';
import '../styling/NavBar.scss';

export default function NavBar(){
    return(
        <div className='site-nav'>
            <a href='#about-me'>About Me</a>
            <a href='#projects'>Projects</a>
            <a href='#links'>Links</a>
            <a href='#'>Contact Me</a>
        </div>
    )
}