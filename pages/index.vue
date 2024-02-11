<template>
    <div class="intro">
        <div class="d-flex intro_selfEntry flex-small-column">
            <v-img src="/developer_me.webp" rounded width="100%" max-width="350" alt="That is photo of me next to Odra river in Wroclaw" />
            <div class="pa-2">
                <h1>{{ me.fullName }}</h1>
                <h2>{{ me.profession }}</h2>
                <span> I am a Software Engineer and Full Stack Developer with a passion for building optimized code and functional user experiences. </span>
            </div>
        </div>
        <div class="d-flex intro_selfEntry flex-small-column mb-4">
            <div class="pa-2 text-right">
                <h2>Chess</h2>
                <span>I am a person who loves to spend time actively in a various ways.</span>
                <span>The first person on the right is me - 2nd place in the country level.</span>
            </div>
            <v-img alt="Chess tournamet" src="/hobbies/chess/chess.webp" width="100%" max-width="350" rounded />
        </div>
        <div class="d-flex intro_selfEntry flex-small-column">
            <v-img alt="Books on my shelf" src="/hobbies/books/books.webp" width="100%" max-width="350" rounded />
            <div class="pa-2">
                <h2>Books</h2>
                <span
                    >Reading has been always an important part of my life. It is one of the best way of gaining knowledge. Since I have started my studies, mostly I like reading Sci-Fi, biography and
                    self development books.</span
                >
            </div>
        </div>
        <div class="d-flex intro_selfEntry flex-small-column">
            <div class="pa-2 text-right mw-350">
                <h2>Rowing</h2>
                <span>Rowing became my passion since I have started my university journey. Becoming oarsmen was equal to develop self discipline and passion to do hard things.</span>
            </div>
            <v-carousel cycle hide-delimiter-background :interval="3000" hide-delimiters :show-arrows="false" class="carousel">
                <v-carousel-item v-for="(item, i) in rowingItems" :key="i" :src="item.src" rounded cover />
            </v-carousel>
        </div>
    </div>
</template>
<script setup lang="ts">
const rowingItems = [
    {
        src: '/hobbies/rowing/rowing1.webp',
    },
    {
        src: '/hobbies/rowing/rowing2.webp',
    },
    {
        src: '/hobbies/rowing/rowing3.webp',
    },
    {
        src: '/hobbies/rowing/rowing4.webp',
    },
    {
        src: '/hobbies/rowing/rowing5.jpg',
    },
    {
        src: '/hobbies/rowing/rowing6.webp',
    },
];
</script>

<style scoped lang="scss">
.intro {
    display: block;
    &_selfEntry {
        justify-content: center;
        padding: 1rem;
        margin-bottom: 1em;
        .carousel {
            max-width: 618px;
        }
        .mw-350 {
            max-width: 350px;
        }
    }
}
</style>
