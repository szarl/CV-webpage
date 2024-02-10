<template>
    <div class="experience">
        <v-timeline line-color="white">
            <v-timeline-item v-for="experience in experiences" dot-color="#75edae">
                <template v-slot:opposite>
                    <h3>
                        {{ experience.monthDuration }}
                    </h3>
                </template>
                <div class="text-center">
                    <h2 class="greenLighterText">{{ experience.company }}</h2>
                    <span>{{ experience.location }}</span>
                    <h3>{{ experience.position }}</h3>
                    <span v-html="experience.description" />
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
<script setup>
const experiences = me.experiences;
</script>

<style scoped>
.experience {
    padding: 20px;
    height: 100%;
}
</style>
