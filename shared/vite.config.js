const path = require('node:path');

// https://vitejs.dev/config/
module.exports = {
  envDir: path.resolve(__dirname, '../'),
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('tailwindcss')({
          presets: [require('./tailwind.config.js')],
          content: ['./src/**/*.{js,ts,jsx,tsx,svelte,vue,html}'],
        }),
      ],
    },
  },
};
