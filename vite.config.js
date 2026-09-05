import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Deployed as a GitHub Pages *project* site:
 *   https://thomasAllene.github.io/thomas-2026-portfolio/
 *
 * `base` must match the repository name, with leading and trailing slashes.
 * If you rename the repo, change this one value.
 * If you move to a user site (thomasAllene.github.io), set base to '/'.
 */
export default defineConfig({
    plugins: [react()],
    base: '/thomas-2026-portfolio/',
    build: {
        outDir: 'dist',
    },
});
