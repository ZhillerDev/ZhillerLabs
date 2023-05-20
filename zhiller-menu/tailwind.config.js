/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"blk-200": "#082032",
				"blk-150": "#2C394B",
				"blk-100": "#334756",
				"blk-50": "#959BA6",
				"blu-1": "#00ADB5",
			},
		},
	},
	plugins: [],
};
