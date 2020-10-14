import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import '../styling/Header.scss';


export default function Header(){
    const typeTarget = useRef(null);

    useEffect(() => {
        var options = { 
            stringsElement: '#typed-js',
            typeSpeed: 50,
            backSpeed: 42,
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
                <p>I'm a Lambda School Alumni </p>
                <p>I'm a Software Engineer</p>
                <p>I love to learn about mortgages, skateboard when the sun is out</p>
                <p>and I love to code ◠◡◠</p>
            </div>
        </div>
    )
}