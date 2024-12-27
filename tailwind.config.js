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
          "url('https://scontent.xx.fbcdn.net/v/t1.15752-9/431346604_3613763545507188_2878860993630188080_n.png?stp=dst-png_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=FsGwS-2TApcQ7kNvgHk6-Pn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEt3gil4TaUXOSjXzzgdGUfvg77AzCze2awX6pz6zZWTg&oe=677D02A8')",
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
