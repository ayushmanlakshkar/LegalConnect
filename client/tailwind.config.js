module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      scrollbar: {
        none: 'none',
      },
      boxShadow: {
        // iconShadow: '0px 0px 20px rgba(255, 255, 255, 0.164)',
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
              primary: '#FFFFFF',
              secondary: '#ffed4a',
              background: '#f8fafc',
              text: '#191919',
              shadow: 'rgba(0, 0, 0,0.164)',
            }
          },
        },
        {
          name: 'dark1',
          selectors: ['[data-theme="dark1"]'],
          extend: {
            colors: {
              primary: '#111216',
              secondary: '#282828',
              background: '#1a202c',
              text: '#f7fafc',
              shadow: 'rgba(255, 255, 255,0.164)',
            },
          },
        },
      ],
    }),
  ],
};
