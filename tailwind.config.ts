import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      tightest: '-0.04em',
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.04em',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spinner-leaf-fade': 'spinner-leaf-fade 800ms linear infinite',
      },
      keyframes: {
        'spinner-leaf-fade': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [forms],
} satisfies Config;
