<template>
    <v-row>
        <v-col cols="6">
            <VCard rounded>
                <h2>Round up function</h2>
                <VTextField v-model="roundUpNumber" label="Number" type="number" outlined dense></VTextField>
                <span>Result: {{ roundUp() }}</span>
            </VCard>
        </v-col>
        <v-col cols="6">
            <VCard rounded>
                <h2>Round down function</h2>
                <VTextField v-model="roundDownNumber" label="Number" type="number" outlined dense></VTextField>
                <span>Result: {{ roundDown() }}</span>
            </VCard>
        </v-col>
        <v-col cols="6">
            <VCard rounded>
                <h2>Set of numbers</h2>
                <VTextField v-model="newArrayElement" label="Number" type="number" outlined dense></VTextField>
                <VBtn @click="set(newArrayElement)" color="primary">Add</VBtn>
                <span class="ml-3">Result: {{ arrayOfNumbers }}</span>
            </VCard>
        </v-col>
        <v-col cols="6">
            <VCard rounded>
                <h2>Mod a % b</h2>
                <VTextField v-model="div" label="Div" type="number" outlined dense></VTextField>
                <VTextField v-model="divider" label="Divider" type="number" outlined dense></VTextField>
                <span>Result: {{ modDiv(div, divider) }}</span>
            </VCard>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
const arrayOfNumbers = ref<Number[]>([1, 2, 3]);
const roundUpNumber = ref<number>(0);
const roundDownNumber = ref<number>(0);
const newArrayElement = ref<number>(0);
const div = ref<number>(0);
const divider = ref<number>(0);
function roundUp() {
    if (roundUpNumber.value === 0 || roundUpNumber.value === null) {
        return 0;
    }

    return Math.ceil(roundUpNumber.value);
}

function roundDown() {
    if (roundDownNumber.value === 0 || roundDownNumber.value === null) {
        return 0;
    }

    return Math.floor(roundDownNumber.value);
}

function set(number: number) {
    if (arrayOfNumbers.value.includes(Number(number))) {
        roundDownNumber.value = 0;
        return;
    }

    arrayOfNumbers.value.push(Number(number));
    newArrayElement.value = 0;
}

function modDiv(number: number, div: number) {
    return number % div;
}
</script>
