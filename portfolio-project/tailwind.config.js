/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../..//public/blurry-gradient-hero.svg')",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brown: '#8B4411',
      brown: {
        900: '#8B4411',
        700: '#ae6e4e',
        500: '#a57a5a',
        300: '#CC9767',
        100: '#C7AD7F',
      },
      cream: '#f8f1dc',
      white: '#FFFFFF',
      black: '#000000',
      black: {
        900: '#03001C',
        300: '#C8C8C8',
      },
      purple: '#301E67',
      lightBlue: '#5B8FB9',
      lightGreen: '#B6EADA'
    },
    fontFamily: {
      
    }
  },
  plugins: [require("tailwindcss-animate")],
}
