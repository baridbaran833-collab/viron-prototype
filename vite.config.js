import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this repository at /viron-prototype/, not at the domain root.
  base: '/viron-prototype/',
  plugins: [react()],
});
