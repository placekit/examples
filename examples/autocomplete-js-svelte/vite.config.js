import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import viteConfig from 'shared/vite.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  ...viteConfig,
  plugins: [sveltekit()],
});
