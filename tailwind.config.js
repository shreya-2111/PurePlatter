/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E23744',
        ink: '#1C1C1C',
        muted: '#696969',
        surface: '#F8F8F8',
        cream: '#FFF4EE',
        gold: '#F4B740',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 45px rgba(28, 28, 28, 0.08)',
        soft: '0 14px 35px rgba(226, 55, 68, 0.12)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(28,28,28,0.8), rgba(226,55,68,0.55))',
      },
    },
  },
  plugins: [],
};
