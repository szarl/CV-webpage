<template>
    <div>
        <VCard>
            <h2>Permutation</h2>
            <VTextField v-model="permutation" label="Permutation" outlined dense></VTextField>
            <span class="ml-3">Result: {{ isPermutation(permutation) }}</span>
        </VCard>
        <VCard class="mt-4">
            <h2>Permutation generator</h2>
            <VTextField v-model="permutationsAmont" label="Amount of permutations" type="Number" outlined dense></VTextField>
            <VBtn @click="setNewPermutations(permutationsAmont)" color="primary">Check</VBtn>
            <span class="ml-3">Result: {{ permutations }}</span>
        </VCard>
    </div>
</template>
<script setup lang="ts">
const permutation = ref<string>('');
function isPermutation(sequence: string | Ref<string>): boolean {
    if (!sequence) {
        return false;
    }

    const arrayOfNumbers = sequence.split(',').map(Number);
    const n: number = arrayOfNumbers.length;
    const seen: Set<number> = new Set();
    for (let i = 0; i < n; i++) {
        if (arrayOfNumbers[i] < 1 || arrayOfNumbers[i] > n || seen.has(arrayOfNumbers[i])) {
            return false;
        }

        seen.add(arrayOfNumbers[i]);
    }

    return true;
}

const permutationsAmont = ref<number>(0);
let permutations = ref(generatePermutations(3));
function generatePermutations(amount: number): number[][] {
    const result: number[][] = [];
    function permute(arr: number[], current: number[] = []): void {
        if (current.length === amount) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const remaining: number[] = arr.filter((_, index) => index !== i);
            permute(remaining, [...current, arr[i]]);
        }
    }

    const initialArray: number[] = Array.from({ length: amount }, (_, index) => index + 1);
    permute(initialArray);
    return result;
}

function setNewPermutations(amount: number | string) {
    permutations.value = generatePermutations(Number(amount));
}
</script>
