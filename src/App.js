import Card from './components/Card'
import { useEffect, useState, useRef } from 'react'

import logo from './code squad 3 logo.png';

let interval

function App() {
    // const daysRef = useRef()
    // const hoursRef = useRef()
    const minutesRef = useRef()
    const secondsRef = useRef()
    const [time, setTime] = useState({
        // prevDays: 0,
        // days: 0,
        // prevHours: 0,
        // hours: 0,
        prevMinutes: 0,
        minutes: 0,
        prevSeconds: 0,
        seconds: 0,
    })

    useEffect(() => {
        const resetAnimation = (prev, curr, ref) => {
            if (prev !== curr) {
                ref.current.classList.remove('animate')
                void ref.current.offsetWidth
                ref.current.classList.add('animate')
            }
        }

        const getTime = () => {
            const countDownDate = new Date('Dec 3, 2022 12:10:00').getTime()

            // Get today's date and time
            const now = new Date().getTime()

            const distance = countDownDate - now

            // Time calculations for days, hours, minutes and seconds
            // const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval)
                setTime({
                    // days: 0,
                    // hours: 0,
                    minutes: 0,
                    seconds: 0,
                })
                return
            }

            setTime((prev) => {
                // resetAnimation(prev.days, days, daysRef)
                // resetAnimation(prev.hours, hours, hoursRef)
                resetAnimation(prev.minutes, minutes, minutesRef)
                resetAnimation(prev.seconds, seconds, secondsRef)

                // const prevDays = daysRef.current.querySelector('.top').textContent
                // const prevHours = hoursRef.current.querySelector('.top').textContent
                const prevMinutes = minutesRef.current.querySelector('.top').textContent
                const prevSeconds = secondsRef.current.querySelector('.top').textContent

                return {
                    // prevDays,
                    // days,
                    // prevHours,
                    // hours,
                    prevMinutes,
                    minutes,
                    prevSeconds,
                    seconds,
                }
            })
        }

        interval = setInterval(getTime, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [time])

    return (
        <div className='App'>
            {/*image*/}
            {/*<img src={logo} alt='logo' className='logo' />*/}
            <main id='home'
                  className='flex flex-col pt-[7rem] pb-[4rem] justify-start sm:justify-center items-center bg-darkPurple  bg-smallBgPos sm:bg-bottomAndCenter bg-no-repeat sm:bg-[length:contain,contain] min-w-screen min-h-screen'
            >
                {/*flex gap-[2rem] absolute left-1/2 object-right-bottom*/}
                <div className="absolute ml-1/2 mb-96 w-256 pb-12">
                    <img src={logo} alt="Group-1" border="0"/>
                </div>

                {/*<h1 className='text-4xl sm:text-5xl text-white font-bold mb-4'>Countdown Timer</h1>*/}
                <div className='flex flex-wrap justify-center items-start gap-[.95rem] '>
                    {/*<Card*/}
                    {/*    time={time.days}*/}
                    {/*    prevTime={time.prevDays}*/}
                    {/*    text="days"*/}
                    {/*    ref={daysRef}*/}
                    {/*/>*/}
                    {/*<Card*/}
                    {/*    time={time.hours}*/}
                    {/*    prevTime={time.prevHours}*/}
                    {/*    text="hours"*/}
                    {/*    ref={hoursRef}*/}
                    {/*/>*/}
                    <Card
                        time={time.minutes}
                        prevTime={time.prevMinutes}
                        text='minutes'
                        ref={minutesRef}
                    />
                    <Card
                        time={time.seconds}
                        prevTime={time.prevSeconds}
                        text='seconds'
                        ref={secondsRef}
                    />
                </div>
                {/*<div className="flex gap-[2rem] absolute bottom-[3rem] left-1/2 -translate-x-[50%] ">*/}
                {/*    {logos.map((logo) => (*/}
                {/*        <a href="#home" key={logo.id} className="logo">*/}
                {/*            <img src={logo.url} alt={logo.id} />*/}
                {/*        </a>*/}
                {/*    ))}*/}
                {/*</div>*/}
                {/*Logo*/}

            </main>
        </div>
    )
}

export default App
