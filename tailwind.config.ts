import type { Config } from "tailwindcss";


const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            container: { center: true, padding: "1rem" },
            colors: {
                brand: {
                    DEFAULT: "#3b82f6",
                    600: "#2563eb"
                }
            }
        }
    },
    plugins: [],
};
export default config;