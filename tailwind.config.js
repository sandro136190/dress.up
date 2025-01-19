/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg":
          "url(https://html.design/demo/eflyer/images/banner-bg.png)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerColor: "#2b2a29",
        textColor: "#f1f1f1",
        buttonColor: "#30302e",
      },
    },
  },
  plugins: [],
};
