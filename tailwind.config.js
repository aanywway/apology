/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { display: ['"Playfair Display"','serif'], sans: ['Inter','sans-serif'] }, boxShadow: { soft: '0 24px 70px rgba(92,64,51,.12)' } } }, plugins: [] };
