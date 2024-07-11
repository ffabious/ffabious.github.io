/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Nunito: ['Nunito', 'sans-serif'],
				ConcertOne: ['Concert One', 'sans-serif'],
				Rubik: ['Rubik', 'sans-serif']
			},
			colors: {
				headerback: '#8a2be2',
				logomain: '#f0ffff',
				logohover: '#ffc800'
			}
		}
	},
	plugins: []
};
