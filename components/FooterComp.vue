<template>
    <v-footer class="text-center d-flex flex-column">
        <div>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
        </div>
        <v-divider color="white" />
        <div>{{ currentYear }} — <strong>Karol Rutkowski</strong></div>
    </v-footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];
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
