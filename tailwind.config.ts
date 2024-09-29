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
        title: "#29333A",
        text: "#586670",
        button: "#00262E",
        bar: "#445560",
        greenStart: "#D9EAD7",
        greenEnd: "#439539",
        blueStart: "#E5F8FC",
        blueEnd: "#00BCE4",
        yellowStart: "#FFFAE5",
        yellowEnd: "#FFD200",
        purpleStart: "#F1EBF1",
        purpleEnd: "#9747FF",
        redStart: "#F9E7EA",
        redEnd: "#C41230",
        orangeStart: "#FFFBE6",
        orangeEnd: "#FFD200",
      },
      flex: {
        "3": "3 3 0%",
        "10": "10 10 0%",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  // plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
