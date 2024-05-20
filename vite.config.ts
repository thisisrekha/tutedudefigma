import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tutedudefigma/',
  build: {
    outDir: 'build', // Specify the output directory
  },
  server: { watch: { awaitWriteFinish: true } },
  plugins: [react()],
});
