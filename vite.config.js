import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        blog: './blog.html',
        'how-it-works': './how-it-works.html',
        products: './products.html',
        privacy: './privacy-policy/index.html',
        shop: './shop.html',
        'terms-of-service': './terms-of-service.html',
        'blog-benefits-pr': './blog/benefits-of-group-runs-on-pr.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
