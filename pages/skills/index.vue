<template>
    <div class="skills">
        <h3>Skills</h3>
        <ul>
            <li v-for="skill in me.skills" :key="skill">{{ skill }}</li>
        </ul>
    </div>
</template>

<style scoped></style>
