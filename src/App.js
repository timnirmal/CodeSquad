import Card from './components/Card'
import { useEffect, useState, useRef } from 'react'

let interval

function App() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
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

            setTime({
                days,
                hours,
                minutes,
                seconds,
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
                <Card time={time.days} text="days" />
                <Card time={time.hours} text="hours" />
                <Card time={time.minutes} text="minutes" />
                <Card time={time.seconds} text="seconds" />
            </div>
        </main>
    )
}

export default App
