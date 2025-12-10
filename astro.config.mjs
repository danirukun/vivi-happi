// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://vivi-happi.danirukun.com',
    output: 'static',
    integrations: [tailwind(), icon(), sitemap()],
    i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'en',
    },
});