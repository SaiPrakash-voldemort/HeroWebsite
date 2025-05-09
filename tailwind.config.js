/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#00afaf',
          600: '#008c8c',
          700: '#006969',
          800: '#004646',
          900: '#002323',
        },
        secondary: {
          50: '#fff0eb',
          100: '#ffe1d7',
          200: '#ffc3af',
          300: '#ffa587',
          400: '#ff875f',
          500: '#ff6937',
          600: '#cc542c',
          700: '#993f21',
          800: '#662a16',
          900: '#33150b',
        },
        accent: {
          lavender: '#9d8df1',
          mint: '#84e6d1',
          coral: '#ff8c69',
          sky: '#64c4ed',
          amber: '#ffc857',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 15px rgba(0, 175, 175, 0.5)',
        'glow-warm': '0 0 15px rgba(255, 105, 55, 0.5)',
      },
    },
  },
  plugins: [],
}


