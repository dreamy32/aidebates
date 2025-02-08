import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;