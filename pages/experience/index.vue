<template>
    <div class="experience">
        <h3>Experience</h3>
        <ul>
            <li v-for="experience in me.experiences" :key="experience.company">
                <h4>{{ experience.company }}</h4>
                <p>{{ experience.position }}</p>
                <p>{{ experience.duration }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Add your custom styles here */
</style>
