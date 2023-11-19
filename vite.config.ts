import react from '@vitejs/plugin-react';
import sass from 'sass';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/contactify-app/';
  }

  return config;
});
