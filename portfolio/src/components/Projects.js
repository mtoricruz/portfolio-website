import React from 'react';
import '../styling/Projects.scss'

export default function Projects(){
    return(
        <div>
            <div className='projects-h1'>
                <h1>Projects</h1>
            </div>
            <div className='projects-grid'>
                <div className='project'>
                    <div className='project-info'>
                        <h2>Citrics - Find the City for You</h2>
                        <img src={require('../styling/imgs/citricsimg.PNG')} alt='citrics-pic'/>
                    </div>
                    <div className='hover-container' style={{opacity: '0'}}>
                        <div className='hover-col-1'>
                            <a 
                                href='https://youtu.be/29ftYQLN3IE' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fas fa-link fa-8x"/>
                            </a>
                            <a 
                                href='https://github.com/Lambda-School-Labs/Labs26-Citrics-FE-TeamA/tree/main' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fab fa-github fa-8x"/>
                            </a> 
                        </div>
                        <div className='hover-col-2'> 
                            <p>React.js</p>
                            <p>Cypress.io</p>
                            <p>Jest/Enzyme</p>
                            <p>Sass</p>
                            <p>Ant Design</p>
                            <p>Plotly.js</p>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-info'>
                        <h2>Conway's Game of Life</h2>
                        <img src={require('../styling/imgs/game-of-life.PNG')} alt='citrics-pic'/>
                    </div>
                    <div className='hover-container' style={{opacity: '0'}}>
                        <div className='hover-col-1'>
                            <a 
                                href='https://game-of-life-tau.vercel.app/' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fas fa-link fa-8x"/>
                            </a>
                            <a 
                                href='https://github.com/mtoricruz/game_of_life' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fab fa-github fa-8x"/>
                            </a> 
                        </div>
                        <div className='hover-col-2'> 
                            <p>React.js</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Jest</p>
                            <p>Javascript</p>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-info'>
                        <h2>Citrics - Find the City for You</h2>
                        <img src={require('../styling/imgs/citricsimg.PNG')} alt='citrics-pic'/>
                    </div>
                    <div className='hover-container' style={{opacity: '0'}}>
                        <div className='hover-col-1'>
                            <a 
                                href='https://a.citrics.dev' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fas fa-link fa-8x"/>
                            </a>
                            <a 
                                href='https://github.com/Lambda-School-Labs/Labs26-Citrics-FE-TeamA/tree/main' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fab fa-github fa-8x"/>
                            </a> 
                        </div>
                        <div className='hover-col-2'> 
                            <p>React.js</p>
                            <p>Cypress.io</p>
                            <p>Jest/Enzyme</p>
                            <p>Sass</p>
                            <p>Ant Design</p>
                            <p>Plotly.js</p>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-info'>
                        <h2>Citrics - Find the City for You</h2>
                        <img src={require('../styling/imgs/citricsimg.PNG')} alt='citrics-pic'/>
                    </div>
                    <div className='hover-container' style={{opacity: '0'}}>
                        <div className='hover-col-1'>
                            <a 
                                href='https://a.citrics.dev' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fas fa-link fa-8x"/>
                            </a>
                            <a 
                                href='https://github.com/Lambda-School-Labs/Labs26-Citrics-FE-TeamA/tree/main' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className="fab fa-github fa-8x"/>
                            </a> 
                        </div>
                        <div className='hover-col-2'> 
                            <p>React.js</p>
                            <p>Cypress.io</p>
                            <p>Jest/Enzyme</p>
                            <p>Sass</p>
                            <p>Ant Design</p>
                            <p>Plotly.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}