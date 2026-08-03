import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/EscapeApp/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EscapeApp',
        short_name: 'EscapeApp',
        description: 'Escape room cinematografiche interattive',
        theme_color: '#080706',
        background_color: '#080706',
        display: 'standalone',
        orientation: 'any',
      },
    }),
  ],
});