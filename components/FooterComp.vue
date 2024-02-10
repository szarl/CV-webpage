<template>
    <v-footer class="text-center d-flex flex-column">
        <div>
            <v-btn v-for="icon in socials" :key="icon.name" class="mx-4" :icon="icon.icon" variant="text" @click="redirectToFramework(icon.url)" />
        </div>
        <v-divider color="white" />
        <div>{{ currentYear }} — <strong>Karol Rutkowski</strong></div>
    </v-footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
const socials = me.socials;
function redirectToFramework(link: string) {
    window.open(link, '_blank');
}
</script>

<style scoped lang="scss">
@import '~/assets/variables.scss';

footer {
    padding: 20px;
    text-align: center;
    background-color: $mainGreen;
    max-height: 125px;
    margin-top: 5vh;
}
</style>
