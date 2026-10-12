import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repoName = 'Testing-';

export default defineConfig({
  integrations: [tailwind()],
  site: `https://piyushkumarexe.github.io/${repoName}/`,
  base: `/${repoName}/`,
  output: 'static',
});