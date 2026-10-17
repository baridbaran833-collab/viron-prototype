import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a GitHub project page, set base to '/your-repository-name/' before building.
export default defineConfig({
  plugins: [react()],
});
