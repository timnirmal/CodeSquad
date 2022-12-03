import React, { useCallback, useEffect, useRef } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
}

function Realistic() {
    const refAnimationInstance = useRef(null)

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance
    }, [])

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
        refAnimationInstance.current({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(200 * particleRatio),
        })
    }, [])

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        })

        makeShot(0.2, {
            spread: 60,
        })

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        })

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        })

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        })
    }, [makeShot])

    useEffect(() => {
            fire()
            fire()

        }
        , [fire])

    return (
        <>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </>
    )
}


export function TheEnd() {

    // redirect to home page after 5 seconds
    setTimeout(() => {
        window.location.href = '/theendhighq'

    }
        , 5000)


    return (
        <>

            <Realistic />
            <div className='flex h-screen w-full'>
                <div className="flex-1 bg-[url('./backdrop.jpeg')] bg-cover bg-top bg-no-repeat">
                {/*<div className="flex-1 bg-[url('./backdropHighQ.jpg')] bg-cover bg-center bg-no-repeat">*/}

                </div>
            </div>
            {/*<div id='home'*/}
            {/*     className='flex flex-col pt-[7rem] pb-[4rem] justify-start sm:justify-center items-center bg-darkPurple  bg-smallBgPos sm:bg-bottomAndCenter bg-no-repeat sm:bg-[length:contain,contain] min-w-screen min-h-screen'*/}
            {/*>*/}

            {/*    /!*<div className='flex flex-wrap justify-center items-start gap-[.95rem] '>*!/*/}
            {/*    /!*    <h1 className='font-redHat font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>The End</h1>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
        </>

    )
}