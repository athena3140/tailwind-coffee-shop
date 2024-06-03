/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				bgPrimary: "#121315",
				bgSecondary: "#1C1D1F",
				secondary: {
					100: "#E2E2D5",
					200: "#888883",
				},
			},
			fontFamily: {
				body: ["DM Sans"],
			},
		},
	},
	plugins: [],
};
