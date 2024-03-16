<template>
    <div class="experience">
        <v-timeline line-color="white">
            <v-timeline-item v-for="experience in experiences" dot-color="#75edae">
                <template v-slot:opposite>
                    <h3 v-if="!isString(experience.endTime)">
                        {{ experience.monthDuration }}
                    </h3>
                    <h3 v-else>
                        {{ `${experience.startTime.toLocaleString('default', { month: '2-digit' })}.${experience.startTime.getFullYear()} - ${experience.endTime}` }}
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
const isString = (value) => typeof value === 'string';
</script>

<style scoped>
.experience {
    height: 100%;
}
</style>
