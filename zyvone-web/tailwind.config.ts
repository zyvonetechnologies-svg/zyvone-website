import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config = {
  darkMode: "class",
  content: [
    "./index.html",          // 🔥 REQUIRED
    "./src/**/*.{ts,tsx}",   // 🔥 MOST IMPORTANT
  ],
  theme: {
    extend: {},
  },
  plugins: [animate],
} satisfies Config


export default config
