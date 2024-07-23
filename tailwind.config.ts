import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-peerlist":
          "linear-gradient(245.36deg, rgba(111, 207, 151, 0.2) 0%, rgba(255, 255, 255, 0) 65.72%)",
        "gradient-peerlist-muted":
          "linear-gradient(245.36deg, rgba(209, 213, 218, 0.7) 0%, rgba(255, 255, 255, 0) 29.57%)",
        "gradient-peerlist-button":
          "linear-gradient(180deg, #00AA45 50.49%, #1E874B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
