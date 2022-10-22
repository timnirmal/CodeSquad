import {
    top_card_bottom_left_circle,
    top_card_bottom_right_circle,
    bottom_card_bottom_left_circle,
    bottom_card_bottom_right_circle,
    card_overlay,
} from './constants'

function App() {
    return (
        <main className="flex flex-col justify-center items-center bg-darkPurple bg-pattern-hills bg-bottomAndCenter bg-no-repeat  bg-[length:contain,contain] min-w-screen min-h-screen">
            <h1 className="text-default uppercase tracking-[.35rem]">
                We're launching soon
            </h1>
            <div className="flex ">
                <div className="">
                    <div
                        className={`flip-card relative inline-flex flex-col text-softRed text-[4rem] ${card_overlay}`}
                    >
                        <div className="container-top relative">
                            <div
                                className={`relative h-[.75em] px-[.25em] pb-[0em] pt-[.25em] bg-darkDesaturatedBlue brightness-[83%] overflow-hidden leading-none rounded-t-md ${top_card_bottom_left_circle} ${top_card_bottom_right_circle} `}
                            >
                                08
                            </div>
                            <div
                                className={`absolute top-0 left-0 h-[.75em] px-[.25em] pb-[0em] pt-[.25em] bg-darkDesaturatedBlue brightness-[83%] overflow-hidden leading-none rounded-t-md ${top_card_bottom_left_circle} ${top_card_bottom_right_circle} top-flip`}
                            >
                                08
                            </div>
                        </div>
                        <div className="container-bottom relative">
                            <div
                                className={`relative flex items-end h-[.75em] px-[.25em] pt-[0em] pb-[.25em] bg-darkDesaturatedBlue overflow-hidden leading-none rounded-b-md ${bottom_card_bottom_left_circle} ${bottom_card_bottom_right_circle}  `}
                            >
                                08
                            </div>
                            <div
                                className={`absolute top-0 left-0 flex items-end h-[.75em] px-[.25em] pt-[0em] pb-[.25em] bg-darkDesaturatedBlue overflow-hidden leading-none rounded-b-md ${bottom_card_bottom_left_circle} ${bottom_card_bottom_right_circle}  bottom-flip`}
                            >
                                08
                            </div>
                        </div>
                    </div>
                    <h3>Days</h3>
                </div>
            </div>
        </main>
    )
}

export default App
