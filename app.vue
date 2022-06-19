<script setup lang="ts">
    const count = ref(0);
    function inc() {
        count.value++;
    }
</script>

<template>
    <div class="font-sans">
        <h1 class="text-xl font-bold">Hi</h1>
        <p>yay</p>
        <button @click="inc">Click me!</button>
        <p>{{ count }}</p>
    </div>
</template>
