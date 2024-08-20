const { colors } = require('@mui/material');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // tertiary: '#6B8E23', // Soft green for default theme
      },
      scrollbar: {
        none: 'none',
      },
      boxShadow: {
        // iconShadow: '0px 0px 20px rgba(255, 255, 255, 0.164)',
      },
      scale: {
        'sm': '0.8', // Small scale
        'md': '1', // Default scale
        'lg': '1.2', // Large scale
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-none': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          '&::-webkit-scrollbar': {
            display: 'none', /* Safari and Chrome */
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('@tailwindcss/typography'),
    require('tailwindcss-themer')({
      defaultTheme: 'light1',
      themes: [
        {
          name: 'light1',
          selectors: ['[data-theme="light1"]'],
          extend: {
            colors: {
              primary: '#F3F2EE',
              secondary: '#FFFFFF',
              background: '#f8fafc',
              text: '#191919',
              shadow: 'rgba(0, 0, 0,0.164)',
              tertiary: '#G3F2ED', // Soft green for light theme
            },
            skew: {
              '20': '20deg',
            },
          },
        },
        {
          name: 'dark1',
          selectors: ['[data-theme="dark1"]'],
          extend: {
            colors: {
              primary: '#111216',
              secondary: '#191F29',
              background: '#1a202c',
              text: '#f7fafc',
              shadow: 'rgba(255, 255, 255,0.164)',
              tertiary: '#2d3748', // Deep teal for dark theme
            },
          },
        },
      ],
    }),
  ],
};
