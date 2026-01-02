/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F4F1EA",
                primary: {
                    DEFAULT: "#E53935",
                    dark: "#D32F2F",
                },
                dark: {
                    DEFAULT: "#0B0F19",
                    soft: "#0E1320",
                },
                pastel: {
                    yellow: "#FFF4B8",
                    beige: "#EFE6D8",
                    red: "#D84343",
                },
                muted: {
                    gray: "#555555",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'xl': '16px',
                '2xl': '24px',
            }
        },
    },
    plugins: [],
}
