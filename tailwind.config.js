module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#3d5af1',
				secondary: '#3651d4',
				active: '#5872f5',
				inactive: '#cfcde7',
				light: {
					primary: '#3d5af1',
					secondary: '#3651d4',
					inactive: '#f3f4f6', // gray-100
					active: '#e4e7eb', // gray-200
				},
				dark: {
					primary: '#0f172a',
					secondary: '#1e293b',
					inactive: '#f3f4f6',
					active: '#e4e7eb',
				},
			}
		},
	},
	plugins: [],
}

/**
 * 				light_primary: '#3d5af1',
				light_secondary: '#3651d4',
				light_inactive: '#f3f4f6',
				light_active: '#e4e7eb',
				dark_secondary: '#3d5af1',
				dark_secondary: '#3651d4',
				dark_inactive: '#9ca3af',
				dark_active: '#e4e7eb',
 */