/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: ["class", "class"],
  theme: {
  	container: {
  		center: true,
  		padding: '1rem'
  	},
  	screens: {
  		xs: '450px',
  		sm: '575px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		'2xl': '1400px'
  	},
			fontFamily: {
        sans: ['poppins', 'sans-serif'],
      },
  	extend: {
  		colors: {
  			current: 'currentColor',
  			transparent: 'transparent',
  			white: '#FFFFFF',
  			black: '#121723',
  			primary: '#0E90A5',
  			dark: '#1D2430',
  			yellow: '#FBB040',
  			'bg-color-dark': '#171C28',
  			'body-color': {
  				DEFAULT: '#788293',
  				dark: '#959CB1'
  			},
  			stroke: {
  				stroke: '#E3E8EF',
  				dark: '#353943'
  			},
  			gray: {
                    ...colors.gray,
  				dark: '#1E232E',
  				light: '#F0F2F9'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
  			one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
  			two: '0px 5px 10px rgba(6, 8, 15, 0.1)',
  			three: '0px 5px 15px rgba(6, 8, 15, 0.05)',
  			sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
  			'sticky-dark': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
  			'feature-2': '0px 10px 40px rgba(48, 86, 211, 0.12)',
  			submit: '0px 5px 20px rgba(4, 10, 34, 0.1)',
  			'submit-dark': '0px 5px 20px rgba(4, 10, 34, 0.1)',
  			btn: '0px 1px 2px rgba(4, 10, 34, 0.15)',
  			'btn-hover': '0px 1px 2px rgba(0, 0, 0, 0.15)',
  			'btn-light': '0px 1px 2px rgba(0, 0, 0, 0.1)'
  		},
  		dropShadow: {
  			three: '0px 5px 15px rgba(6, 8, 15, 0.05)'
  		},
  		animation: {
  			spotlight: 'spotlight 2s ease .75s 1 forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			spotlight: {
  				'0%': {
  					opacity: 0,
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translate(-50%,-40%) scale(1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
			
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
