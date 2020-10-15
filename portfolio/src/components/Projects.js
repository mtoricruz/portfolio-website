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
                                href='https://a.citrics.dev' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i class="fas fa-link fa-8x"/>
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
                                <i class="fas fa-link fa-8x"/>
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
                                <i class="fas fa-link fa-8x"/>
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
                                <i class="fas fa-link fa-8x"/>
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