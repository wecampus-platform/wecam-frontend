//tailwind.config 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/index.css',
  ],
  theme: {
    extend: {
      colors: {
        "point": "rgb(59 130 246)",
        "white": "rgb(251 251 251)",
        "black": "rgb(44 45 47)",
        "sub1": "rgb(239 245 254)",
        "sub2": "rgb(230 239 255)",
        "sub3": "rgb(155 193 255)",
        "gray1": "rgb(245 247 250)",
        "gray2": "rgb(216 218 221)",
        "gray3": "rgb(180 181 181)",
        "gray4": "rgb(101 103 107)",
        "gray5": "rgb(90 93 97)",
        "gray6": "rgb(85 87 92)"
      },
    },
  },
  plugins: [],
}
