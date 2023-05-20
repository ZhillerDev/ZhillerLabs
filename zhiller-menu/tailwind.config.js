/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"blk-200": "#393E46",
				"blk-150": "#929AAB",
				"blk-100": "#EEEEEE",
				"blk-50": "#959BA6",
				"blu-1": "#00ADB5",
			},
		},
	},
	plugins: [],
};
