import logo from './code squad 3 logo.png'

import React, { useCallback, useEffect, useRef } from 'react'
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function Realistic() {
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
        refAnimationInstance.current({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(200 * particleRatio)
        });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        makeShot(0.2, {
            spread: 60
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [makeShot]);

    useEffect(() => {
        fire();
        fire();

    }
    , [fire]);

    return (
        <>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </>
    );
}


export function NewQuestion() {

    // call Realistic() when page loads

    return (
        <>

            <Realistic />
            <div id='home'
                 className='flex flex-col pt-[7rem] pb-[4rem] justify-start sm:justify-center items-center bg-darkPurple  bg-smallBgPos sm:bg-bottomAndCenter bg-no-repeat sm:bg-[length:contain,contain] min-w-screen min-h-screen'
            >
                <div className='absolute ml-1/2 mb-96 w-256 pb-12'>
                    <img src={logo} alt='Group-1' border='0' />
                </div>

                <div className='flex flex-wrap justify-center items-start gap-[.95rem] '>
                    <h1 className='font-redHat font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>New
                        Question Added</h1>
                </div>
            </div>
        </>

    )
}