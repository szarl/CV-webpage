<template>
    <div class="main-page">
        <div class="d-flex">
            <v-img src="/developer_me.webp" rounded max-width="350" min-width="200" alt="That is photo of me next to Odra river in Wroclaw" />
            <div class="pa-2">
                <h1>{{ me.fullName }}</h1>
                <h2>{{ me.profession }}</h2>
                <span> I am a Software Engeneer and full stack developer with a passion for building optimized code and beautiful and functional user experiences. </span>
            </div>
        </div>
    </div>
</template>
