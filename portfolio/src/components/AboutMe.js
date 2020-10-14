import React from 'react';
import '../styling/AboutMe.scss';

export default function AboutMe(){
    return(
        <div className='about-me-div'>
            <div className='about-me-box growing-up'>
                <h1>Growing Up</h1>
                <p  style={{opacity: '0'}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
                </p>
            </div>
            <div className='about-me-box'>
                <h1>Before Coding</h1>
                <p  style={{opacity: '0'}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
                </p>
            </div>
            <div className='about-me-box'>
                <h1>My Journey Now</h1>
                <p  style={{display: 'none'}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
                </p>
            </div>
            <div className='about-me-box'>
                <h1>Personal Interests</h1>
                <p  style={{display: 'none'}}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
                </p>
            </div>
        </div>
    )
}