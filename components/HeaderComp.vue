<template>
    <v-app-bar class="header" rounded>
        <h1 class="header_title"><NuxtLink to="/">Karol Rutkowski</NuxtLink></h1>
        <v-spacer></v-spacer>
        <nav class="header__nav">
            <ul v-if="!isMobile">
                <li v-for="link in links">
                    <NuxtLink class="nuxtLink" :to="link.to"> {{ link.text }}</NuxtLink>
                </li>
                <li>
                    <ClientOnly>
                        <v-btn :icon="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'" aria-label="Theme" @click="isDark = !isDark" :theme="isDark ? 'light' : 'dark'" color="#75edae" />
                        <template #fallback>
                            <div class="w-8 h-8" />
                        </template>
                    </ClientOnly>
                </li>
            </ul>
            <v-menu v-else offset-y>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props" color="#75edae">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list bg-color="#2c3e50">
                    <v-list-item v-for="link in links" :key="link.text" link>
                        <v-list-item-title>
                            <NuxtLink class="nuxtLink" :to="link.to">{{ link.text }}</NuxtLink>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </nav>
    </v-app-bar>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const display = ref(useDisplay());
const colorMode = useColorMode();
const links = [
    { text: 'Home', to: '/' },
    { text: 'Projects', to: '/projects' },
    { text: 'Experience', to: '/experience' },
    { text: 'Education', to: '/education' },
    { text: 'Skills', to: '/skills' },
    { text: 'Contact', to: '/contact' },
];
const isMobile = computed(() => display.value.mobile);
const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    },
});
</script>

<style scoped lang="scss">
@import '~/assets/variables.scss';

.header {
    align-items: center;
    padding: 1rem;
    background-color: transparent;
    position: relative !important;
    &_title {
        font-size: 2rem;
        font-weight: bold;
        color: white;
        font-family: Impact;
        a {
            text-decoration: none !important;
        }
    }
}

header div {
    justify-content: space-between;
}

.header__nav ul {
    list-style: none;
    display: flex;
    align-items: center;
}

.header__nav li {
    margin-right: 1rem;
}

.nuxtLink {
    text-decoration: none;
    color: $mainGreen;
    font-weight: bold;
    &:hover {
        color: #00dc82;
    }
}
</style>
