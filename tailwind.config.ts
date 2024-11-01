import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				layout: '#F2F3F8',
				'sidebar': '#282733',
				'red-active': '#DB1430',
				'dark-hover': '#2f2e3c',
				'dark-icon': '#4a4a76',
				'light-icon': '#7c87a6',
				'lime-section': '#A8C827',

			},
		}
	},
	plugins: [],
};

export default config;
