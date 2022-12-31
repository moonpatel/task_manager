/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                sky: "url('./assets/images/sky.jpg')",
            },
            colors: {
                regular: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                },
                dark: {
                    gray: "#111827",
                    slate: "#0f172a",
                    zinc: "#18181b",
                    neutral: "#171717",
                    stone: "#1c1917",
                },
            },
        },
    },
    plugins: [],
};
