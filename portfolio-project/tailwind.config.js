/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/hero.svg')",
        'about': "url('/about-bg.svg')",
        'project': "url('/project-bg.svg')",
        'contact': "url('/contact-bg.svg')",
        'parks': "url('/parks-bg.svg')",
        'park-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/blurred-park-bg.jpg')",
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
      white: {
        900: '#FFFFFF',
        200: '#EDEDED'
      },
      black: '#000000',
      black: {
        900: '#0B0C10',
        300: '#1F2833',
        100: '#C5C6C7'
      },
      blue: {
        700: '#242582',
        500: '#2F2FA2'
      },
      purple: {
        300: '#553D67',
        200: '#99738E',
      },
      pink: '#F64C72',
      lightBlue: '#5B8FB9',
    },
    fontFamily: {
      
    }
  },
  plugins: [require("tailwindcss-animate")],
}
