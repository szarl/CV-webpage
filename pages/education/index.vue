<template>
    <div class="education">
        <v-timeline line-color="white">
            <v-timeline-item v-for="education in educations" dot-color="#75edae">
                <template v-slot:opposite>
                    <h4>
                        {{ education.monthDuration }}
                    </h4>
                </template>
                <div class="text-center">
                    <h2 class="greenLighterText">{{ education.institution }}</h2>
                    <h3>{{ education.degree }}</h3>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
<script setup>
const educations = me.educations;
</script>
<style scoped>
.education {
    padding: 20px;
    height: 100%;
}
</style>
