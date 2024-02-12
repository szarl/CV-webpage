<template>
    <v-row>
        <v-col cols="12" sm="4" md="4" v-for="(skill, index) in skills" :key="index">
            <v-hover v-slot="{ isHovering, props }">
                <v-card rounded @click="redirectToFramework(skill.link)" :elevation="isHovering ? 12 : 2" v-bind="props">
                    <v-card-title>
                        <v-chip class="mr-2" color="primary">{{ skill.name }}</v-chip>
                    </v-card-title>
                    <v-icon>{{ skill.icon }}</v-icon>
                    <v-card-text></v-card-text>
                    <v-rating :class="{ hover: isHovering || isMobile }" class="rating" v-model="skill.stars"></v-rating>
                </v-card>
            </v-hover>
        </v-col>
        <v-col cols="12" class="d-flex align-center">
            <v-divider class="mr-3" />
            <Transition name="page">
                <h2 class="text-no-wrap">Languages</h2>
            </Transition>
            <v-divider class="ml-3" />
        </v-col>
        <v-col cols="12" sm="6" md="6" v-for="(language, index) in languages" :key="index">
            <v-hover v-slot="{ isHovering, props }">
                <v-card rounded :elevation="isHovering ? 12 : 2" v-bind="props">
                    <v-card-title>
                        <v-chip class="mr-2" color="primary">{{ language.name }}</v-chip>
                    </v-card-title>
                    <v-icon>{{ language.icon }}</v-icon>
                    <v-card-text>{{ language.description }}</v-card-text>
                    <v-rating :class="{ hover: isHovering || isMobile }" class="rating" v-model="language.stars"></v-rating>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>
<script setup>
import { useDisplay } from 'vuetify';
const { skills, languages } = me;
function redirectToFramework(link) {
    window.open(link, '_blank');
}
const display = ref(useDisplay());
const isMobile = computed(() => display.value.mobile);
</script>

<style scoped lang="scss">
@import '~/assets/variables.scss';
.v-row {
    .v-card {
        width: 100%;
        padding: 12px;
        display: block;
        text-align: center;
        margin: 12px;
        margin: auto;
        background-color: $mainGreen200;
        .rating {
            opacity: 0;
            transition: all ease-in 0.3s;
            &.hover {
                opacity: 1;
            }
        }
        &:hover {
            background-color: $mainGreen100;
            cursor: pointer;
            .v-chip {
                opacity: 0.6;
            }
            .v-icon {
                opacity: 0.6;
            }
        }
    }
}
</style>
