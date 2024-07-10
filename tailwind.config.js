/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        ACCENT: "#1DB8B4",
        // ACCENT: "#238eff",
        BACKGROUND: "#F5F5F5",
        BACKGROUND_2: "#FFFFFF",
        FOREGROUND: "#3B434E"
      },
    },
  },
  plugins: [],
}

