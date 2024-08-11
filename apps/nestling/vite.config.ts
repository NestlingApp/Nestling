/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from "url";
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/nestling',
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
,
  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/nestling',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@Components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@Services', replacement: fileURLToPath(new URL('./src/services', import.meta.url)) },
      { find: '@Pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@Images', replacement: fileURLToPath(new URL('./src/assets/img', import.meta.url)) },
      { find: '@Data', replacement: fileURLToPath(new URL('./src/data', import.meta.url)) },
      { find: '@Styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
    ],
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/nestling',
      provider: 'v8',
    },
  },
});
