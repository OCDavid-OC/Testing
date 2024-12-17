/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dracula: {
          background: '#282a36',
          current: '#44475a',
          foreground: '#f8f8f2',
          selection: '#44475a',
          comment: '#6272a4',
          purple: '#bd93f9',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          red: '#ff5555',
          yellow: '#f1fa8c'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};