import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        benefits: './benefits.html',
        'how-it-works': './how-it-works.html',
        privacy: './privacy-policy.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
