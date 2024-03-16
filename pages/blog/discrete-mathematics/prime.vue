<template>
    <div>
        <VCard>
            <h2>K Prime</h2>
            <VTextField v-model="kPrimeNumber" label="Number" type="number" outlined dense></VTextField>
            <VBtn @click="generatePrimes()" color="primary">Generate</VBtn>
            <span class="ml-3">Result: {{ result }}</span>
        </VCard>
    </div>
</template>
<script setup lang="ts">
const kPrimeNumber = ref<number>(0);
const result = ref<string>('');
function generatePrimes() {
    const primes = new Array(Number(kPrimeNumber.value) + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i * i <= Number(kPrimeNumber.value); i++) {
        if (primes[i]) {
            for (let j = i * i; j <= Number(kPrimeNumber.value); j += i) {
                primes[j] = false;
            }
        }
    }

    result.value = primes
        .reduce((acc, val, index) => {
            if (val) acc.push(index);
            return acc;
        }, [])
        .join(', ');
}
</script>
