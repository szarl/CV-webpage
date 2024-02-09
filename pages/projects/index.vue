<template>
    <div class="projects">
        <div class="d-flex align-center mb-3">
            <v-divider class="mr-2" />
            <h2>Projects</h2>
            <v-divider class="ml-2" />
        </div>
        <v-timeline line-color="white">
            <v-timeline-item v-for="project in projects" dot-color="#75edae">
                <template v-slot:opposite>
                    <h3>
                        {{ project.monthDuration }}
                    </h3>
                </template>
                <div class="text-center">
                    <h2 class="greenLighterText">{{ project.institution }}</h2>
                    <h3>{{ project.degree }}</h3>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
<script setup>
const projects = me.projects;
</script>

<style scoped>
/* Add your custom styles here */
</style>
