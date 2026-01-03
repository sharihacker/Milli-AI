/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './APP/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#06b6d4',
        'brand-purple': '#8b5cf6',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [],
};
