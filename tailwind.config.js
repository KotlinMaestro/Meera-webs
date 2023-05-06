module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            backgroundColor: {
                'g-mofo': 'rgb(29, 54, 58)',
                'mofo': 'rgb(64, 81, 83)',
            },
            textColor: {
                'color-1': 'rgb(211, 198, 171)',
                'color-2': 'rgb(127, 142, 139)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite')],
};
