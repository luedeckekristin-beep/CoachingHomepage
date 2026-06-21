/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A4A3F',    // Tiefes Dunkelgrün — Buttons, Akzente, dunkle Sektionen
          dark: '#1F3830',       // Hover-State
          light: '#3D6353',      // Sekundär-Akzent, Links
        },
        bg: {
          DEFAULT: '#EAEBE0',    // Warmes Salbei-Beige — Haupt-Hintergrund
          card: '#F0F1E8',       // Karten-Hintergrund
          cream: '#F7F7F0',      // Helle Sektionen, fast cremefarben aber nicht hart weiß
        },
        ink: {
          DEFAULT: '#2A4A3F',    // Haupttext: Dunkelgrün statt Schwarz
          soft: '#5A7A6E',       // Sekundärtext, Captions
          light: '#F7F7F0',      // Text auf dunklem Hintergrund
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '42rem',
        wide: '84rem',
      },
    },
  },
  plugins: [],
};
