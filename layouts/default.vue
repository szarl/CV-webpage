<template>
    <v-app class="main">
        <HeaderComp />
        <v-main>
            <div class="d-flex align-center mb-3" style="height: 36px">
                <v-divider class="mr-3" />
                <Transition name="page">
                    <h2 v-if="bounce" class="text-no-wrap">{{ fullRoute }}</h2>
                </Transition>
                <v-divider class="ml-3" />
            </div>
            <div class="main_slot">
                <slot />
            </div>
        </v-main>
        <FooterComp />
    </v-app>
</template>
<script setup>
const defaultText = 'Long story short';
const route = ref(useRoute());
const fullRoute = computed(() => (route.value.name === 'index' ? defaultText : route.value.name.charAt(0).toUpperCase() + route.value.name.slice(1)));
const bounce = ref(true);
watch(fullRoute, () => {
    bounce.value = !bounce.value;
    setTimeout(() => {
        bounce.value = !bounce.value;
    }, 300);
});
</script>
<style lang="scss">
@import '~/assets/variables.scss';
.main {
    color: black;
    background-color: transparent;
    .v-main {
        padding: 20px;
    }
    &_slot {
        max-width: 1000px;
        margin: auto;
    }
}

// SETTING UP DARK MODE AND LIGHT MODE
.dark-mode body {
    background-color: $background;
    .main {
        color: #ebf4f1;
    }
}

.light-mode body {
    background-color: #ebf4f1;
    .v-app-bar {
        background-color: $background;
    }
}
</style>
