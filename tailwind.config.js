/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ice: {
          950: "#04070C",
          900: "#070C14",
          800: "#0B1220",
          700: "#0E1A2F",
          600: "#163357",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(120, 196, 255, 0.18)",
        ice: "0 20px 80px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "ice-radial":
          "radial-gradient(1200px 600px at 50% 0%, rgba(120,196,255,0.18), transparent 60%)",
        "ice-radial-2":
          "radial-gradient(900px 500px at 80% 20%, rgba(160,120,255,0.14), transparent 60%)",
      },
    },
  },
  plugins: [],
};