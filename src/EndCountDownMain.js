import React, { useEffect, useRef, useState } from 'react'
import logo from './code squad 3 logo.png'
import CardEnd from './components/CardEnd'

let interval

function EndCountDownMain() {
    const minutesRef = useRef()
    const secondsRef = useRef()
    const [time, setTime] = useState({
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
            const countDownDate = new Date('Dec 3, 2022 17:37:00').getTime()

            // Get today's date and time
            const now = new Date().getTime()

            const distance = countDownDate - now

            // Time calculations for days, hours, minutes and seconds
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval)
                setTime({

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
            <main id='home'
                  className='flex flex-col pt-[7rem] pb-[4rem] justify-start sm:justify-center items-center bg-darkPurple  bg-smallBgPos sm:bg-bottomAndCenter bg-no-repeat sm:bg-[length:contain,contain] min-w-screen min-h-screen'
            >
                <div className="absolute ml-1/2 mb-96 w-256 pb-12">
                    <img src={logo} alt="Group-1" border="0"/>
                </div>

                <div className='flex flex-wrap justify-center items-start mt-24 p-12 '>
                    <h1 className='font-redHat font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
                        Competition Ends in </h1>
                </div>

                <div className='flex flex-wrap justify-center items-start gap-[.95rem] '>
                    <CardEnd
                        time={time.minutes}
                        prevTime={time.prevMinutes}
                        text='minutes'
                        ref={minutesRef}
                    />
                    <CardEnd
                        time={time.seconds}
                        prevTime={time.prevSeconds}
                        text='seconds'
                        ref={secondsRef}
                    />
                </div>

            </main>
        </div>
    )
}

export default EndCountDownMain
