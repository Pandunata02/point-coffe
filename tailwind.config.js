/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // ─────────────────────────────────────────────────────────
                // BEIGE — Primary color palette. Use these for all surfaces.
                //   bg-beige-50  → lightest: card/modal backgrounds
                //   bg-beige-100 → very light: alternate section bg
                //   bg-beige-200 → light: default PAGE background (= sand)
                //   bg-beige-300 → medium-light: borders & dividers
                //   text-beige-700 → body text on light beige surfaces
                //   text-beige-800 → headings on light beige surfaces
                // ─────────────────────────────────────────────────────────
                beige: {
                    50: '#FDFBF8',
                    100: '#F7F2EB',
                    200: '#EDE7DB',
                    300: '#DDD5C6',
                    400: '#CABEAD',
                    500: '#B3A28E',
                    600: '#967D68',
                    700: '#7A6455',
                    800: '#5D4C3B',
                    900: '#3D2F22',
                },

                // ─────────────────────────────────────────────────────────
                // COFFEE — Warm brown tones for text & dark UI elements.
                //   text-coffee-700 → standard body text
                //   text-coffee-800 → headings
                //   text-coffee-900 → emphasis / hero dark overlays
                //   bg-coffee-900   → dark hero / section overlays
                // ─────────────────────────────────────────────────────────
                coffee: {
                    50: '#FAF8F5',
                    100: '#F5F1E8',
                    200: '#E8E1D5',
                    300: '#D4C7B5',
                    400: '#C4B5A0',
                    500: '#B09A7F',
                    600: '#9B8570',
                    700: '#7A6956',
                    800: '#5D4E3E',
                    900: '#3D3229',
                },

                // ─────────────────────────────────────────────────────────
                // SEMANTIC ALIASES — Convenient shortcuts
                //   cream  → text-cream / bg-cream  (= beige-100)
                //            Use for text on dark backgrounds (hero, footer)
                //   sand   → bg-sand                (= beige-200)
                //            Use as main page background color
                // ─────────────────────────────────────────────────────────
                cream: '#F7F2EB',
                sand: '#EDE7DB',

                // ─────────────────────────────────────────────────────────
                // FOOTER — Rich dark anchor for the footer section
                // ─────────────────────────────────────────────────────────
                'footer-brown': '#7A6050',

                // ─────────────────────────────────────────────────────────
                // GOLD — Accent color for CTAs, prices & highlights
                //   bg-gold / text-gold       → primary accent
                //   bg-gold-light / text-gold-light → subtle tint
                //   bg-gold-dark              → hover state for buttons
                // ─────────────────────────────────────────────────────────
                gold: {
                    light: '#D4B77A',
                    DEFAULT: '#C9A961',
                    dark: '#A6864D',
                },
            },
            fontFamily: {
                display: ['"DrukWideBold"', 'sans-serif'],
                sans: ['"HelveticaNowDisplay"', 'sans-serif'],
                serif: ['"Ragasta"', 'serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'fadeIn': 'fadeIn 1s ease-in',
                'slideUp': 'slideUp 0.5s ease-out',
                'scaleIn': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
