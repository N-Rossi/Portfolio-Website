/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0b14',
          800: '#0f1020',
          700: '#13152a',
          600: '#1a1d36',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          fuchsia: '#d946ef',
          rose: '#f43f5e',
          lime: '#a3e635',
        },
        text: {
          primary: '#e8ecf7',
          secondary: '#a4a9bf',
          muted: '#6b7086',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
        'radial-glow':
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 60%)",
        'radial-glow-cyan':
          "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(34,211,238,0.18), transparent 60%)",
        'gradient-brand':
          "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #d946ef 100%)",
        'gradient-brand-soft':
          "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(217,70,239,0.15) 100%)",
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.2 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        'glow-violet': '0 0 40px -8px rgba(139,92,246,0.55)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.55)',
        'card': '0 10px 30px -10px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04) inset',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        'blink': {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: 0.7 },
          '100%': { transform: 'scale(1.6)', opacity: 0 },
        },
        'aurora': {
          '0%, 100%': { transform: 'translate3d(-10%, -10%, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(10%, 10%, 0) rotate(180deg)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'marquee-reverse': 'marquee-reverse 50s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'blink': 'blink 1.1s steps(2) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.24, 0, 0.38, 1) infinite',
        'aurora': 'aurora 22s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
