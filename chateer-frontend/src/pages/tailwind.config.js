/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pale_orange: '#ffd9a6',
                light_orange: '#fbb03b',
                orange: '#f7931e',
            },
        },
    },
    plugins: [],
};

