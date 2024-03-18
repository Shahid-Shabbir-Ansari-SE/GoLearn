import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#623CE7',
      },
      fontFamily: {
        arialBold: ['Arial Rounded MT Bold', 'monospace'],
        arialRegular: ['Arial Rounded MT', 'monospace'],
        arialLight: ['Arial Rounded MT Light', 'monospace'],
        interLight: ['Inter Light', 'monospace'],
        interRegular: ['Inter Regular', 'monospace'],
        interSemiBold: ['Inter SemiBold', 'monospace'],
        interBold: ['Inter Bold', 'monospace']
      },
    }
  },
  plugins: []
} satisfies Config
