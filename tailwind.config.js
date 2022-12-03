/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            spacing: {
                '256': '300px',
            },
            colors: {
                grayishBlue: 'hsl(var(--grayishBlue) / <alpha-value>)',
                softRed: 'hsl(var(--softRed) / <alpha-value>)',
                darkPurple: 'hsl(var(--darkPurple) / <alpha-value>)',
                default: 'hsl(var(--default) / <alpha-value>)',
                darkDesaturatedBlue:
                    'hsl(var(--darkDesaturatedBlue) / <alpha-value>)',
                veryDarkBlue: 'hsl(var(--veryDarkBlue) / <alpha-value>)',
                veryDarkBlackBlue:
                    'hsl(var(--veryDarkBlackBlue) / <alpha-value>)',
            },
            fontFamily: {
                redHat: ['var(--redHat)'],
            },
            backgroundImage: {
                'pattern-hills':
                    "url('/images/pattern-hills.svg'), url('/images/bg-stars.svg')",
            },
            backgroundPosition: {
                bottomAndCenter: 'bottom, center',
                smallBgPos: 'bottom 0 right 15%, center',
            },
        },

    },
    plugins: [],
}
