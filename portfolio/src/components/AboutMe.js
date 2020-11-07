import React from 'react';
import '../styling/AboutMe.scss';

export default function AboutMe(){
    return(
        <div className='about-me-div'>
            <div className='about-me-h1'>
                <h1>About Me</h1>
            </div>
            <div className='about-me-p'>
                <p>
                    <span id='indent'>Born</span> &amp; raised in Washington state and am currently living in Federal Way, WA. At the start of 2020 I began my journey to learning web development. While I didn't come out of the womb passionate about coding, I certainly <span id='pun'>developed </span>a love for it and my passion continues to grow as I learn more.</p> 
                <p>
                <span id='indent'>I</span> specifically joined the tech industry because I believe it to be a true meritocracy. Tech is not gatekept by degrees or economic-class privilege. As someone who had to drop out of high-school during junior year, I'm grateful to be in a space where if someone puts in the time &amp; effort to learn and get better at their skills everyday, they are looked at as an equal, as a real developer.
                </p>
            </div>
        </div>
    )
}