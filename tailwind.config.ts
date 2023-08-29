import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    height: {
      "landing-header": "5rem"
    },
    colors: {
      "white": "white",
      "primary": "var(--fg-primary)",
      "accent-primary": "var(--accent-primary)"
    }
  },
  plugins: [],
}
export default config
