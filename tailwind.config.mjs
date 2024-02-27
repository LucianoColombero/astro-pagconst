/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"negro-sombra": '#2C2D31',
				"azul-noche": '#18191D',
				"azul-h1": '#011638',
				"blanco": '#EEF0F2',
				"amarillo": '#EEC643',
			},

			backgroundImage: {
				'banner': "url('/img/banner.png')",
				'About-us': "url('/img/About-us.png')",
			  }
		},
		
	},
	plugins: [],
}
