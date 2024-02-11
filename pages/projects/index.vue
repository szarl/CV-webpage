<template>
    <div class="projects">
        <div v-for="project in projects">
            <h2 class="greenLighterText">{{ project.name }}</h2>
            <h3>{{ project.description }}</h3>
            <div class="d-flex justify-space-evenly mt-7 mb-7">
                <NuxtLink v-if="project.repoLink1" :to="project.repoLink1" class="nuxtLink" target="_blank">Frontend</NuxtLink>
                <NuxtLink v-if="project.appLink" :to="project.appLink" class="nuxtLink" target="_blank">App working under</NuxtLink>
                <NuxtLink v-if="project.repoLink2" :to="project.repoLink2" class="nuxtLink" target="_blank">Backend</NuxtLink>
            </div>
            <v-row>
                <template v-for="(image, imgIdx) in project.photos" :key="imgIdx">
                    <v-col :cols="image.cols">
                        <v-img :src="image.imgPath" :alt="image.alt" rounded cover height="100%" />
                    </v-col>
                    <v-col v-if="image.children" cols="6" class="d-flex flex-column">
                        <v-row>
                            <v-col v-for="(children, childIdx) in image.children" :key="childIdx" :cols="children.cols">
                                <v-img :src="children.imgPath" :alt="children.alt" rounded cover height="100%" />
                            </v-col>
                        </v-row>
                    </v-col>
                </template>
            </v-row>
        </div>
    </div>
</template>
<script setup>
const projects = me.projects;
</script>

<style scoped>
/* Add your custom styles here */
</style>
