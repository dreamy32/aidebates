/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--background)',
        'bg-card': 'var(--card-background)',
        'text-primary': 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'accent': 'var(--accent)',
        'border': 'var(--border)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'title': '42px',
        'section': '32px',
        'subtitle': '24px',
        'body': '18px',
        'small': '14px',
      },
      maxWidth: {
        'content': '1140px',
        'sidebar': '320px',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};