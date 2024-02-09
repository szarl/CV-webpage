<template>
    <v-app-bar class="header" rounded>
        <h1 class="header_title"><NuxtLink to="/">Karol Rutkowski</NuxtLink></h1>
        <v-spacer></v-spacer>
        <nav class="header__nav">
            <ul>
                <li><NuxtLink href="/">Home</NuxtLink></li>
                <li><NuxtLink href="/projects">Projects</NuxtLink></li>
                <li><NuxtLink href="/experience">Experience</NuxtLink></li>
                <li><NuxtLink href="/education">Education</NuxtLink></li>
                <li><NuxtLink href="/skills">Skills</NuxtLink></li>
                <li><NuxtLink href="/contact">Contact</NuxtLink></li>
                <li>
                    <ClientOnly>
                        <v-btn :icon="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'" aria-label="Theme" @click="isDark = !isDark" :theme="isDark ? 'light' : 'dark'" />
                        <template #fallback>
                            <div class="w-8 h-8" />
                        </template>
                    </ClientOnly>
                </li>
            </ul>
        </nav>
    </v-app-bar>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
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
    &__nav {
        a {
            text-decoration: none;
            color: $mainGreen;
            font-weight: bold;
            &:hover {
                color: #00dc82;
            }
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

.header__nav a {
}
</style>
