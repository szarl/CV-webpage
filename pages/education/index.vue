<template>
    <div class="education">
        <div class="d-flex align-center mb-3">
            <v-divider class="mr-2" />
            <h2>Education</h2>
            <v-divider class="ml-2" />
        </div>
        <v-timeline line-color="white">
            <v-timeline-item v-for="education in educations" dot-color="#75edae">
                <template v-slot:opposite>
                    <h3>
                        {{ education.monthDuration }}
                    </h3>
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
    color: white;
    height: 100%;
}
</style>
