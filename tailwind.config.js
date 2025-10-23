/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  darkMode: 'class', // allows toggling via a 'dark' class
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Dark mode base
        primary: {
          DEFAULT: "#1C2230",
          light: "#F9FAFC",
        },
        secondary: {
          DEFAULT: "#242B3A",
          light: "#FFFFFF",
        },
        accent: "#E66054",
        highlight: {
          DEFAULT: "#E6C9A8",
          light: "#F4E3C0",
        },
        textPrimary: {
          DEFAULT: "#FFFFFF",
          light: "#1A202C",
        },
        textSecondary: {
          DEFAULT: "#A0AEC0",
          light: "#4A5568",
        },
        progress: "#E66054",
        success: {
          DEFAULT: "#7AC29A",
          light: "#3CB371",
        },
        divider: {
          DEFAULT: "#2E3445",
          light: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
}