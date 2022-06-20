<script setup lang="ts">
    const color = ref("#000000");
    function randomColor() {
        var newColor = "";
        for (var i = 0; i < 6; i++) {
            newColor += Math.floor(Math.random() * 16).toString(16);
        }
        color.value = "#" + newColor;
    }
</script>

<template>
    <div class="grid place-items-center h-screen">
        <p @click="randomColor" class="font-sans text-3xl select-none" :style="{ color: color }">
            Nothing here yet! Check back later.
        </p>
    </div>
</template>
