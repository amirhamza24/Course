/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#2cea07",

                    secondary: "#e3ed31",

                    accent: "#4cf215",

                    neutral: "#1C1627",

                    "base-100": "#E7E1EA",

                    info: "#81A9EF",

                    success: "#116431",

                    warning: "#F4C24E",

                    error: "#F76E87",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
