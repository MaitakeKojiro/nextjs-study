module.exports = {
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    autoprefixer: {
                        flexbox: 'no-2009'
                    }
                },
                stage: 3,
                features: {
                    'custom-properties': false
                }
            }
        ]
    ]
}