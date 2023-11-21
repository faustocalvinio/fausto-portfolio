/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { 
			
		},
		fontFamily: {
			'sans': ['Inter', 'sans-serif']
		}
	},
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting')(require('postcss-nesting')),
		require('autoprefixer'),
		require('tailwindcss'),
	]
}
