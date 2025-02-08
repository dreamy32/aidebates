/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-space': '#121212',
        'charcoal': '#1E1E1E',
        'electric-blue': '#007AFF',
        'neon-cyan': '#00E6E6',
        'soft-blue-gray': '#AAB3C1',
        success: '#28A745',
        warning: '#FF8800',
        error: '#E63946',
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
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderWidth: {
        '3': '3px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1D3557',
            h1: {
              color: '#1D3557',
            },
            h2: {
              color: '#1D3557',
            },
            h3: {
              color: '#1D3557',
            },
            strong: {
              color: '#1D3557',
            },
            a: {
              color: '#2792FD',
              '&:hover': {
                color: '#1D3557',
              },
            },
            code: {
              color: '#2792FD',
              backgroundColor: 'rgba(39, 146, 253, 0.1)',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};