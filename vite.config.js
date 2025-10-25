import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        home: './src/pages/home.html',
        about: './src/pages/about.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
