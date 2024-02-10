<template>
    <v-row>
        <v-col cols="12" sm="4" md="4" v-for="(skill, index) in skills" :key="index">
            <v-card rounded @click="redirectToFramework(skill.link)">
                <v-card-title>
                    <v-chip class="mr-2" color="primary">{{ skill.name }}</v-chip>
                </v-card-title>
                <v-icon>{{ skill.icon }}</v-icon>
                <v-card-text>{{ skill.experience }}</v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
const skills = me.skills;

function redirectToFramework(link) {
    window.open(link, '_blank');
}
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
        background-color: $mainGreen;
        &:hover {
            background-color: $greenLighter;
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
