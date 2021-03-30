module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        standardFontWeights: true,
    },
    purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
}
