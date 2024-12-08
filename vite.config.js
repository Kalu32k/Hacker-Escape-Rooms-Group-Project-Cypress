import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                challenges: 'challenges.html',
                about: 'about.html'
            }
        }
    }
})