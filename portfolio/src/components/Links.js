import React from 'react';
import '../styling/Links.scss';

export default function Links(){
    return(
        <div className='links-div'>
            <div className='github'>
                <a 
                    href='https://www.github.com/mtoricruz' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <i className="fab fa-github fa-10x"/>
                </a>
            </div>
            <div className='linkedin'>
                <a 
                    href='https://www.linkedin.com/in/toricruz-mendiola/'
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <i className="fab fa-linkedin-in fa-10x" />
                </a>
            </div>
            <div className='blog'>
                <a 
                    href='https://medium.com/@toricruz.mendiola' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <i className="fab fa-blogger-b fa-10x"></i>
                </a>
            </div>
            <div className='email'>
                <a 
                    href='mailto: toricruz.mendiola@gmail.com' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <i class="fas fa-envelope fa-10x"></i>
                </a>
            </div>
        </div>
    )
}