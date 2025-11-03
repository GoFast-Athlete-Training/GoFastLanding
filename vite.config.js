import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        privacy: './privacy-policy/privacy.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    {
      name: 'copy-privacy-policy',
      closeBundle() {
        const privacyDir = join(process.cwd(), 'dist', 'privacy-policy')
        if (!existsSync(privacyDir)) {
          mkdirSync(privacyDir, { recursive: true })
        }
        copyFileSync(
          join(process.cwd(), 'privacy-policy', 'privacy.html'),
          join(privacyDir, 'privacy.html')
        )
      }
    }
  ]
})
