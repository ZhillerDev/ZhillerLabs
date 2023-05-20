/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"blk-200": "#393646",
				"blk-150": "#4F4557",
				"blk-100": "#6D5D6E",
				"blk-50": "#959BA6",
				"blu-1": "#00ADB5",
			},
		},
	},
	plugins: [],
};
