/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppin': ['Poppins', 'sans-serif'],
      'mono': ['Ubuntu Mono', 'serif'],
      'ibm-th': ['IBM Plex Sans Thai', 'serif'],
    },
    fontSize: {
      'h1': '1.8em',
      'h3': '1.1em',
    },
    colors: {
      'back': '#F6F8FA',
      'dark': '#24292e',
      'light': '#586069',
    }
  },
  plugins: [],
}

