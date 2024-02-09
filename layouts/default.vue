<template>
    <v-app class="main">
        <HeaderComp />
        <v-main>
            <slot />
        </v-main>
        <FooterComp />
    </v-app>
</template>
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
