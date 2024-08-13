import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { resolve, dirname } from 'path';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(dirname('.'), './src'),
      '@app': resolve(dirname('.'), './src/app'),
      '@shared': resolve(dirname('.'), './src/shared'),
      '@pages': resolve(dirname('.'), './src/pages'),
      '@widgets': resolve(dirname('.'), './src/widgets'),
      '@features': resolve(dirname('.'), './src/features'),
      '@entities': resolve(dirname('.'), './src/entities'),
    },
  },
  define: {
    __API_RTK_URL__: JSON.stringify('http://localhost:5173'),
  },
});
