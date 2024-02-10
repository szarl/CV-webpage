<template>
    <div class="intro">
        <div class="d-flex intro_selfEntry flex-small-column">
            <v-img src="/developer_me.webp" rounded width="100%" max-width="350" min-width="200" alt="That is photo of me next to Odra river in Wroclaw" />
            <div class="pa-2">
                <h1>{{ me.fullName }}</h1>
                <h2>{{ me.profession }}</h2>
                <span> I am a Software Engeneer and Full Stack developer with a passion for building optimized code and beautiful and functional user experiences. </span>
            </div>
        </div>
        <div class="d-flex intro_rowingPassion flex-small-column">
            <div class="pa-2 text-right">
                <h2>Rowing</h2>
                <span> I am a rower and I love to spend my free time on the water and not only. </span>
            </div>
            <v-carousel cycle hide-delimiter-background :interval="3000" hide-delimiters :show-arrows="false">
                <v-carousel-item v-for="(item, i) in rowingItems" :key="i" :src="item.src" rounded cover />
            </v-carousel>
        </div>
    </div>
</template>
<script setup lang="ts">
const rowingItems = [
    {
        src: '/rowing1.webp',
    },
    {
        src: '/rowing2.webp',
    },
    {
        src: '/rowing3.webp',
    },
    {
        src: '/rowing4.webp',
    },
    {
        src: '/rowing5.webp',
    },
    {
        src: '/rowing6.webp',
    },
];
</script>

<style scoped lang="scss">
.intro {
    display: block;
    &_selfEntry {
        justify-content: center;
        padding: 1rem;
    }
}
</style>
