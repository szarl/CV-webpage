import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Karol Rutkowski - Software Engeneer',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        'Karol Rutkowski - Software Engeneer. I am a Software Engeneer and full stack developer with a passion for building optimized code and beautiful and functional user experiences.',
                },
            ],
        },
    },
    devtools: { enabled: true },
    css: ['~/assets/styles.scss', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    ssr: false,
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
        '@nuxtjs/color-mode',
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
});
