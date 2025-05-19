//tailwind.config 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
        danger: '#DC2626',
        success: '#16A34A',
        neutral: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          900: '#111827',
        },
      }
    },
  },
  plugins: [],
}
