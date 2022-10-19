/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                grayishBlue: 'hsl(var(--grayishBlue) / <alpha-value>)',
                softRed: 'hsl(var(--softRed) / <alpha-value>)',
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
        },
    },
    plugins: [],
}
