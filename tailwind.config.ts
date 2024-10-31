import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FA8F2C",
        secondary: "#F2291D",
        "banner-bg": "#032657",
        "button-bg": "#155AA9",
      },
      width: {
        nav: "290px",
        "9/10": "90%",
        "8/10": "80%",
        "img-w": "275px",
      },
      height: { "img-h": "440px" },
      backgroundImage: {
        banner:
          "url('https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      fontSize: {
        "title-1": "40px",
      },
      lineHeight: {
        "title-1": "48px",
      },
      textColor: {
        title: "#262323",
        desc: "#776F6F",
      },
    },
  },
  plugins: [],
};
export default config;
