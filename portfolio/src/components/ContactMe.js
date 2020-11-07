import React from 'react';
import '../styling/ContactMe.scss';

export default function ContactMe(){
    return(
        <div>
            <div className='contact-me-h1'>
                <h1>Contact Me</h1>
            </div>
            <div className='get-in-touch'>
                <p className='first-line'>The 2 best ways to get in touch ◠◡◠</p>
                <div className='contact-grid'>
                    <p>Click this icon to connect on LinkedIn</p>
                    <p>Click this icon to email me</p>
                    <div className='linkedin'>
                        <a 
                            href='https://www.linkedin.com/in/toricruz-mendiola/'
                            target='_blank' 
                            rel='noopener noreferrer'
                            >
                            <i className="fab fa-linkedin-in fa-6x" />
                        </a>
                    </div>
                    <div className='email'>
                        <a 
                            href='mailto: toricruz.mendiola@gmail.com' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            >
                            <i className="fas fa-envelope fa-6x"></i>
                        </a>
                    </div>
                </div>
            </div>   
        </div>
    )
}