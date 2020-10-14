import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import '../styling/Header.scss';


export default function Header(){
    const typeTarget = useRef(null);

    useEffect(() => {
        var options = { 
            stringsElement: '#typed-js',
            typeSpeed: 55,
            backSpeed: 45,
            backDelay: 700,
            loop: false
        };  
        const typed = new Typed(typeTarget.current, options);

        return () => {
            typed.destroy();
        }
    }, []);

    return(
        <div className='header-div'>
            <div>
                <h1>Hey there, I'm Toricruz</h1>
                <span id='bio' ref={typeTarget}/>
            </div>
            <div id='typed-js'>
                <p>I'm a Lambda School Alumni</p>
                <p>I'm a software engineer</p>
                <p>I love to skateboard, play video games and discover new music</p>
                <p>and I love to code</p>
            </div>
        </div>
    )
}