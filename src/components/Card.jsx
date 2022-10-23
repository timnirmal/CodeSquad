import { forwardRef } from 'react'
import {
    top_card_bottom_left_circle,
    top_card_bottom_right_circle,
    bottom_card_bottom_left_circle,
    bottom_card_bottom_right_circle,
    card_overlay,
} from '../constants'

const Card = forwardRef(({ time, prevTime, text }, ref) => {
    return (
        <div className="flex flex-col items-center gap-[1.5rem]">
            <div
                className={`flip-card h-[1.85em] relative inline-flex flex-col text-softRed w-full min-w-[75px] sm:min-w-[100px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem] ${card_overlay}`}
                ref={ref}
            >
                <div className="container-top relative h-[50%]">
                    <div
                        className={`relative h-full px-[.25em] pb-[0em] pt-[.425em] bg-darkDesaturatedBlue brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full ${top_card_bottom_left_circle} ${top_card_bottom_right_circle} top`}
                    >
                        {time.toString().padStart(2, '0')}
                    </div>
                    <div
                        className={`absolute top-0 inset-x-0 h-full px-[.25em] pb-[0em] pt-[.425em] bg-darkDesaturatedBlue brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full ${top_card_bottom_left_circle} ${top_card_bottom_right_circle} top-flip`}
                    >
                        {prevTime.toString().padStart(2, '0')}
                    </div>
                </div>
                <div className="container-bottom relative h-[50%]">
                    <div
                        className={`relative flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em] bg-darkDesaturatedBlue overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full ${bottom_card_bottom_left_circle} ${bottom_card_bottom_right_circle} bottom `}
                    >
                        {prevTime.toString().padStart(2, '0')}
                    </div>
                    <div
                        className={`absolute top-0 inset-x-0 flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em] bg-darkDesaturatedBlue overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full ${bottom_card_bottom_left_circle} ${bottom_card_bottom_right_circle}  bottom-flip`}
                    >
                        {time.toString().padStart(2, '0')}
                    </div>
                </div>
            </div>
            <h2 className="text-grayishBlue uppercase tracking-[.2rem] text-[.5rem] sm:text-[1rem]">
                {text}
            </h2>
        </div>
    )
})

export default Card
