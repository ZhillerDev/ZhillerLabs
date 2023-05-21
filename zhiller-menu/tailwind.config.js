/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"blk-200": "#E8E8E8",
				"blk-150": "#F4F4F2",
				"blk-100": "#EEEEEE",
				"blk-50": "#959BA6",
				"blu-1": "#495464",
			},
		},
	},
	plugins: [],
};
