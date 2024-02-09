<template>
    <div class="main-page">
        <section>
            <div class="d-flex">
                <v-img src="/developer_me.webp" rounded width="300px" alt="That is photo of me next to Odra river in Wroclaw" />
                <div>
                    <h1>{{ me.fullName }}</h1>
                    <h2>{{ me.profession }}</h2>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
