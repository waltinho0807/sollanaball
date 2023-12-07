import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#0089ff",
          "secondary": "#00ae00",
          "accent": "#bfa000",
          "neutral": "#0b140d",
          "base-100": "#fffbf5",
          "info": "#00dbff",
          "success": "#5fdd61",
          "warning": "#ffbe00",
          "error": "#ff598d",
          body: {
            "background-color": "#e3e6e6"
          }
        }
      }
    ]
  }
}
export default config
