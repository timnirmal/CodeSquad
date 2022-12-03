import logo from './code squad 3 logo.png'

export function NewQuestion() {
    return (
        <>
            <div id='home'
                 className='flex flex-col pt-[7rem] pb-[4rem] justify-start sm:justify-center items-center bg-darkPurple  bg-smallBgPos sm:bg-bottomAndCenter bg-no-repeat sm:bg-[length:contain,contain] min-w-screen min-h-screen'
            >
                <div className='absolute ml-1/2 mb-96 w-256 pb-12'>
                    <img src={logo} alt='Group-1' border='0' />
                </div>

                <div className='flex flex-wrap justify-center items-start gap-[.95rem] '>
                    <h1 className='font-redHat font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>New
                        Question Added</h1>
                </div>
            </div>
        </>

    )
}