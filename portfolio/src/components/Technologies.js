import React from 'react';
import '../styling/Technologies.scss';

export default function Technologies(){
    return (
        <div>
            <div className='tech-h1'>
                <h1>Technologies</h1>
            </div>
            <div className='tech-container'>
                <div className='work-with'>
                    <h3>What I've worked with</h3>
                    <p>React, Node.js, PostgreSQL, Python, SQLite Studio, HTML, CSS, SASS, Cypress.io, Jest/Enzyme</p>
                </div>
                <div className='work-with'>
                    <h3>What I'm working with now</h3>
                    <p>React, SASS, Python, HTML, CSS, Vanilla Javascript, Jest</p>
                </div>
                <div className='work-with'>
                    <h3>What I want to work with soon</h3>
                    <p>C#, C++, Typescript, Angular, MongoDB, Ruby on Rails, Java</p>
                </div>
                <div className='work-with'>
                    <h3>What I want to work with in the distant future</h3>
                    <p>C, Swift, Kotlin</p>
                </div>
            </div>
        </div>
    )
}