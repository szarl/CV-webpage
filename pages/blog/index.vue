<template>
    <div class="blog">
        <v-row>
            <v-col cols="12" sm="4" md="4" v-for="(post, index) in posts" :key="index">
                <v-card rounded @click="redirectToFramework(post.link)">
                    <v-card-title>
                        <v-chip class="mr-2" color="primary">{{ post.title }}</v-chip>
                    </v-card-title>
                    <v-card-text>{{ post.description }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
const posts = [
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
    {
        title: 'How to build a blog with Nuxt.js',
        description: 'In this post, I will show you how to build a blog with Nuxt.js and Vuetify.',
        link: 'https://nuxtjs.org/',
    },
];
function redirectToFramework(link) {
    console.warn(link, 'Blog not existing yet :)');
}
</script>
