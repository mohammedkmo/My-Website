import type { Config } from "tailwindcss";

export default {

  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'dark-black': '#000000',
  			'light-black': '#181818',
  			'light-gray': '#9ca3af',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  		container: {
  			center: true,
  			padding: '1rem',
  			screens: {
  				sm: '640px',
  				md: '768px',
  				lg: '768px',
  				xl: '768px'
  			}
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					'code::before': {
  						content: 'none'
  					},
  					'code::after': {
  						content: 'none'
  					},
  					'pre code': {
  						backgroundColor: 'transparent',
  						padding: '0',
  						color: 'inherit',
  						fontSize: 'inherit',
  						fontWeight: 'inherit',
  						fontFamily: 'inherit'
  					},
  					pre: {
  						margin: '0',
  						overflow: 'visible',
  						width: '100%',
  						backgroundColor: 'transparent',
  						color: 'inherit',
  						fontFamily: 'var(--font-geist-mono)'
  					},
  					code: {
  						color: '#e5e7eb',
  						backgroundColor: '#374151',
  						padding: '0.2rem 0.4rem',
  						borderRadius: '0.25rem',
  						fontWeight: '400'
  					},
  					img: {
  						borderRadius: '0.4rem',
  						margin: '1.5rem auto'
  					},
  					a: {
  						color: '#3b82f6',
  						textDecoration: 'none',
  						fontSize: '0.9em',
  						'&:hover': {
  							textDecoration: 'underline'
  						}
  					},
  					blockquote: {
  						borderLeftColor: '#3b82f6',
  						backgroundColor: '#181818',
  						padding: '0.79rem',
  						borderRadius: '0.4rem',
  						fontSize: '0.9em',
  						fontStyle: 'italic'
  					},
  					hr: {
  						borderColor: '#374151',
  						margin: '2rem 0'
  					},
  					h1: {
  						color: '#ffffff',
  						fontWeight: '700',
  						fontSize: '1.6em',
  						lineHeight: '1.2',
  						marginBottom: '1rem'
  					},
  					h2: {
  						color: '#ffffff',
  						fontWeight: '600',
  						fontSize: '1.4em',
  						lineHeight: '1.3',
  						marginTop: '2rem',
  						marginBottom: '0.75rem'
  					},
  					h3: {
  						color: '#ffffff',
  						fontWeight: '600',
  						fontSize: '1.2em',
  						lineHeight: '1.4',
  						marginTop: '1.5rem',
  						marginBottom: '0.5rem'
  					},
  					h4: {
  						color: '#ffffff',
  						fontWeight: '600',
  						fontSize: '1em',
  						lineHeight: '1.4',
  						marginTop: '1.25rem',
  						marginBottom: '0.5rem'
  					},
  					p: {
  						color: '#ffffff',
  						fontSize: '0.8em',
  						lineHeight: '1.7',
  						marginBottom: '1rem'
  					},
  					ul: {
  						color: '#ffffff',
  						fontSize: '0.9em',
  						marginBottom: '1rem',
  						paddingLeft: '1.5rem'
  					},
  					ol: {
  						color: '#ffffff',
  						fontSize: '0.9em',
  						marginBottom: '1rem',
  						paddingLeft: '1.5rem'
  					},
  					strong: {
  						color: '#ffffff',
  						fontWeight: '600'
  					},
  					thead: {
  						color: '#ffffff',
  						fontSize: '0.9em'
  					},
  					tbody: {
  						fontSize: '0.9em',
  						tr: {
  							borderBottomColor: '#374151'
  						}
  					}
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
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
} satisfies Config;
