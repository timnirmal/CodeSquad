import Card from './components/Card'
import { useEffect, useState, useRef } from 'react'

let interval

function App() {
    const daysRef = useRef()
    const hoursRef = useRef()
    const minutesRef = useRef()
    const secondsRef = useRef()
    const [time, setTime] = useState({
        prevDays: 0,
        days: 0,
        prevHours: 0,
        hours: 0,
        prevMinutes: 0,
        minutes: 0,
        prevSeconds: 0,
        seconds: 0,
    })

    useEffect(() => {
        const getTime = () => {
            const countDownDate = new Date('Jan 5, 2024 15:37:25').getTime()

            // Get today's date and time
            const now = new Date().getTime()

            const distance = countDownDate - now

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            )
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval)
                setTime({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                })
                return
            }

            setTime((prev) => {
                if (prev.days !== days) {
                    daysRef.current.classList.remove('animate')
                    void daysRef.current.offsetWidth
                    daysRef.current.classList.add('animate')
                }
                if (prev.hours !== hours) {
                    hoursRef.current.classList.remove('animate')
                    void hoursRef.current.offsetWidth
                    hoursRef.current.classList.add('animate')
                }
                if (prev.minutes !== minutes) {
                    minutesRef.current.classList.remove('animate')
                    void minutesRef.current.offsetWidth
                    minutesRef.current.classList.add('animate')
                }
                if (prev.seconds !== seconds) {
                    secondsRef.current.classList.remove('animate')
                    void secondsRef.current.offsetWidth
                    secondsRef.current.classList.add('animate')
                }

                const prevDays =
                    daysRef.current.querySelector('.top').textContent
                const prevHours =
                    hoursRef.current.querySelector('.top').textContent
                const prevMinutes =
                    minutesRef.current.querySelector('.top').textContent
                const prevSeconds =
                    secondsRef.current.querySelector('.top').textContent

                return {
                    prevDays,
                    days,
                    prevHours,
                    hours,
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
        <main className="flex flex-col justify-center items-center bg-darkPurple bg-pattern-hills bg-bottomAndCenter bg-no-repeat  bg-[length:contain,contain] min-w-screen min-h-screen">
            <h1 className="text-default uppercase tracking-[.35rem]">
                We're launching soon
            </h1>
            <div className="flex flex-wrap gap-[1.5rem]">
                <Card
                    time={time.days}
                    prevTime={time.prevDays}
                    text="days"
                    ref={daysRef}
                />
                <Card
                    time={time.hours}
                    prevTime={time.prevHours}
                    text="hours"
                    ref={hoursRef}
                />
                <Card
                    time={time.minutes}
                    prevTime={time.prevMinutes}
                    text="minutes"
                    ref={minutesRef}
                />
                <Card
                    time={time.seconds}
                    prevTime={time.prevSeconds}
                    text="seconds"
                    ref={secondsRef}
                />
            </div>
        </main>
    )
}

export default App
