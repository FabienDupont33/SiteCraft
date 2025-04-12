import { defineConfig } from 'vite';

export default defineConfig({
  base: '/SiteCraft/', // Remplace "SiteCraft" par le nom de ton dépôt GitHub
  build: {
    outDir: 'dist', // Assure-toi que le dossier de sortie est bien 'dist'
  },
});
