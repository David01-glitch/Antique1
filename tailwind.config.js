/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f3ea',
        parchment: '#efe7d4',
        midnight: '#10172a',
        navy: '#1c2742',
        brass: '#9a7b35',
        brassLight: '#bd9b4c',
        copper: '#a9663f',
        slate: '#5b6473',
        slateDark: '#3c434f'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        base: ['17px', '1.7']
      },
      borderRadius: {
        xl: '0.9rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,23,42,0.04), 0 12px 30px -18px rgba(16,23,42,0.25)',
        lift: '0 18px 40px -20px rgba(16,23,42,0.35)'
      },
      maxWidth: {
        prose: '70ch'
      }
    }
  },
  plugins: []
}
