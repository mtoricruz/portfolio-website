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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
                </p>
            </div>
        </div>
    )
}