import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // Slate 900
          gold: '#d4af37', // Classic Metallic Gold
          red: '#dc2626',  // Red 600
          light: '#f8fafc', // Slate 50
        }
      },
      fontFamily: {
        // পরিবর্তন: এখানে সরাসরি নামের বদলে ভেরিয়েবল ব্যবহার করতে হবে
        sans: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;