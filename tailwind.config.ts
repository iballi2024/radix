import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gotham-italic)']
      },
      colors: {
        /**Default */
        background: "var(--background)",
        foreground: "var(--foreground)",

        /**Custom */
        "theme-clr-primary": "hsl(var(--theme-clr-primary))",
        "theme-clr-primary-light": "hsl(var(--theme-clr-primary-light))",
        "theme-clr-primary-deep": "hsl(var(--theme-clr-primary-deep))",
      },
    },
  },
  plugins: [
    flowbite.plugin(),

    function ({ addComponents }: any) {
      addComponents({
        '.main-navbar': {
          backgroundColor: '#000000',
          '&.inverse': {
            backgroundColor: '#FFFFFF',
          },
        },
        '.btn-custom': {
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          backgroundColor: '#1DA1F2',
          color: '#ffffff',
          textAlign: 'center',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#0d8bba',
          },
        },
      });
    }
  ],
};
export default config;
