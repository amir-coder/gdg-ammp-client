// tailwind.config.js
module.exports = {
  purge: {
      content: [
          "./app/**/*.{js,ts,jsx,tsx}",
          './components/**/*.{js,ts,jsx,tsx}',
          "./src/**/*.{js,ts,jsx,tsx}",
          './next.config.js'
          // For the best performance and to avoid false positives,
          // be as specific as possible with your content configuration.
      ],
  },
  theme: {
      extend: {
          colors: {
              // Configure your color palette here
              transparent: 'transparent',
              'GrayF': '#363740',
              'GrayC': '#4b5563',
              'colortext': '#A4A6B3',
              'hovertext': '#DDE2FF',
              'BorderColor': '#DFE0EB',
          }
      }
  },
  plugins: [],
};