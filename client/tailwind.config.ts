import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#623CE7'
      },
      fontFamily: {
        arialBold: ['Arial Rounded MT Bold', 'monospace'],
        arialRegular: ['Arial Rounded MT', 'monospace'],
        arialLight: ['Arial Rounded MT Light', 'monospace'],
        interLight: ['Inter Light', 'monospace'],
        interRegular: ['Inter Regular', 'monospace'],
        interSemiBold: ['Inter SemiBold', 'monospace'],
        interBold: ['Inter Bold', 'monospace']
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
} satisfies Config
