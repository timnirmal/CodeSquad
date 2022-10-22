import {
    top_card_bottom_left_circle,
    top_card_bottom_right_circle,
    bottom_card_bottom_left_circle,
    bottom_card_bottom_right_circle,
    card_overlay,
} from '../constants'

const Card = ({ time, text }) => {
    return (
        <div className="flex-1 flex flex-col items-center gap-[1.5rem]">
            <div
                className={`flip-card relative inline-flex flex-col text-softRed text-[4rem] ${card_overlay}`}
            >
                <div className="container-top relative">
                    <div
                        className={`relative h-[.75em] px-[.25em] pb-[0em] pt-[.25em] bg-darkDesaturatedBlue brightness-[83%] overflow-hidden leading-none rounded-t-md ${top_card_bottom_left_circle} ${top_card_bottom_right_circle} `}
                    >
                        {time.toString().padStart(2, '0')}
                    </div>
                    <div
                        className={`absolute top-0 left-0 h-[.75em] px-[.25em] pb-[0em] pt-[.25em] bg-darkDesaturatedBlue brightness-[83%] overflow-hidden leading-none rounded-t-md ${top_card_bottom_left_circle} ${top_card_bottom_right_circle} top-flip`}
                    >
                        {time.toString().padStart(2, '0')}
                    </div>
                </div>
                <div className="container-bottom relative">
                    <div
                        className={`relative flex items-end h-[.75em] px-[.25em] pt-[0em] pb-[.25em] bg-darkDesaturatedBlue overflow-hidden leading-none rounded-b-md ${bottom_card_bottom_left_circle} ${bottom_card_bottom_right_circle}  `}
                    >
                        {time.toString().padStart(2, '0')}
                    </div>
                    <div
                        className={`absolute top-0 left-0 flex items-end h-[.75em] px-[.25em] pt-[0em] pb-[.25em] bg-darkDesaturatedBlue overflow-hidden leading-none rounded-b-md ${bottom_card_bottom_left_circle} ${bottom_card_bottom_right_circle}  bottom-flip`}
                    >
                        {time.toString().padStart(2, '0')}
                    </div>
                </div>
            </div>
            <h3 className="text-grayishBlue uppercase tracking-[.2rem]">
                {text}
            </h3>
        </div>
    )
}

export default Card
