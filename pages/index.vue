<script setup lang="ts">
    import isMobile from "is-mobile";
</script>

<template>
    <div>
        <div class="absolute w-screen h-screen bg-slate-100">
            <div
                class="absolute w-screen h-screen bg-bottom bg-[url('/grid.svg')]"
                style="mask-image: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1))"
            />
            <Background v-if="!isMobile()" class="absolute h-screen w-screen" />
            <Card class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
    </div>
</template>
