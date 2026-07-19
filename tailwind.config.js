/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070B14',
          900: '#0B1120',
          800: '#111A2E',
          700: '#1A2540',
          600: '#27345A',
        },
        ember: {
          400: '#FFB25C',
          500: '#FF8A2A',
          600: '#F26A0F',
        },
        mist: {
          100: '#F4F6FB',
          200: '#E4E9F4',
          300: '#C3CCDE',
          400: '#8B97B3',
          500: '#5D6A88',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '80rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 48s linear infinite',
        'pulse-ring': 'pulse-ring 1.6s ease-out infinite',
      },
    },
  },
  plugins: [],
};
