<template>
    <v-app class="main">
        <HeaderComp />
        <v-main>
            <div class="d-flex align-center mb-3">
                <v-divider class="mr-3" />
                <h2 class="text-no-wrap">{{ fullRoute }}</h2>
                <v-divider class="ml-3" />
            </div>
            <slot />
        </v-main>
        <FooterComp />
    </v-app>
</template>
<script setup>
const defaultText = 'Long story short';
const route = ref(useRoute());
const fullRoute = computed(() => (route.value.name === 'index' ? defaultText : route.value.name.charAt(0).toUpperCase() + route.value.name.slice(1)));
</script>
<style scoped lang="scss">
@import '~/assets/variables.scss';
.main {
    background-color: $background;
    color: white;
    .v-main {
        padding: 20px;
    }
}
</style>
