import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main:        resolve(__dirname, 'index.html'),
        about:       resolve(__dirname, 'about.html'),
        programs:    resolve(__dirname, 'programs.html'),
        stories:     resolve(__dirname, 'stories.html'),
        donate:      resolve(__dirname, 'donate.html'),
        'get-involved': resolve(__dirname, 'get-involved.html'),
        news:        resolve(__dirname, 'news.html'),
        contact:     resolve(__dirname, 'contact.html'),
      },
    },
  },
})
