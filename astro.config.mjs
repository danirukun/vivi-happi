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
    vite: {
        preview: {
            allowedHosts: [
                'match-caught-genesis-processes.trycloudflare.com',
                '.trycloudflare.com',
            ],
        },
    },
    i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'en',
    },
});