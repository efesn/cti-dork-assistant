/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "Manrope", "sans-serif"],
        body: ["Manrope", "Segoe UI", "sans-serif"]
      },
      colors: {
        surface: "#fffdf8",
        ink: "#1f2937",
        signal: "#0f766e",
        alert: "#b91c1c",
        accent: "#d97706"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
