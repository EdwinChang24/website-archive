<script setup lang="ts">
    import { gsap } from "gsap";

    let { x, y } = useMousePos();

    const percentToX = computed(() => {
        return (percent: number) => (percent * window.innerWidth) / 100;
    });

    const percentToY = computed(() => {
        return (percent: number) => (percent * window.innerHeight) / 100;
    });

    function onMove() {
        gsap.to(corners, {
            duration: 0.2,
            tlx: updateTL().x,
            tly: updateTL().y,
            trx: updateTR().x,
            try: updateTR().y,
            blx: updateBL().x,
            bly: updateBL().y,
            brx: updateBR().x,
            bry: updateBR().y,
        });
        gsap.to(midpoints, {
            duration: 0.3,
            delay: 0.1,
            ease: "elastic.out(1.5, 0.75)",
            tx: (updateTL().x + updateTR().x) / 2,
            ty: (updateTL().y + updateTR().y) / 2,
            lx: (updateTL().x + updateBL().x) / 2,
            ly: (updateTL().y + updateBL().y) / 2,
            rx: (updateTR().x + updateBR().x) / 2,
            ry: (updateTR().y + updateBR().y) / 2,
            bx: (updateBL().x + updateBR().x) / 2,
            by: (updateBL().y + updateBR().y) / 2,
        });
    }

    watch([x, y], onMove);

    window.addEventListener("resize", onMove);

    onUnmounted(() => {
        window.removeEventListener("resize", onMove);
    });

    /** Distance between each dot's center of potential range and edge of screen */
    const marginLike = 30;
    /** Total horizontal/vertical length for each dot to move in */
    const room = 50;

    let corners = reactive({
        tlx: marginLike,
        tly: marginLike,
        trx: 100 - marginLike,
        try: marginLike,
        blx: marginLike,
        bly: 100 - marginLike,
        brx: 100 - marginLike,
        bry: 100 - marginLike,
    });

    function updateTL() {
        const dist = (x.value + y.value - 2 * marginLike) / Math.SQRT2;
        const ratio = dist / ((100 - marginLike) * Math.SQRT2);
        return {
            x: marginLike - (ratio * room) / 2,
            y: marginLike - (ratio * room) / 2,
        };
    }

    function updateTR() {
        const dist = (-x.value + y.value + (100 - 2 * marginLike)) / Math.SQRT2;
        const ratio = dist / ((100 - marginLike) * Math.SQRT2);
        return {
            x: 100 - marginLike + (ratio * room) / 2,
            y: marginLike - (ratio * room) / 2,
        };
    }

    function updateBL() {
        const dist = (-x.value + y.value - (100 - 2 * marginLike)) / Math.SQRT2;
        const ratio = dist / ((100 - marginLike) * Math.SQRT2);
        return {
            x: marginLike + (ratio * room) / 2,
            y: 100 - marginLike - (ratio * room) / 2,
        };
    }

    function updateBR() {
        const dist = (x.value + y.value - 2 * (100 - marginLike)) / Math.SQRT2;
        const ratio = dist / ((100 - marginLike) * Math.SQRT2);
        return {
            x: 100 - marginLike - (ratio * room) / 2,
            y: 100 - marginLike - (ratio * room) / 2,
        };
    }

    let midpoints = reactive({
        tx: 50,
        ty: marginLike,
        lx: marginLike,
        ly: 50,
        rx: 100 - marginLike,
        ry: 50,
        bx: 50,
        by: 100 - marginLike,
    });
</script>

<template>
    <svg class="w-full h-full">
        <path
            :d="`M ${percentToX(corners.tlx)} ${percentToY(corners.tly)} Q ${percentToX(midpoints.tx)} ${percentToY(
                midpoints.ty
            )} ${percentToX(corners.trx)} ${percentToY(corners.try)}`"
            class="stroke-red-500 stroke-2 drop-shadow-sm-red fill-transparent"
        />
        <path
            :d="`M ${percentToX(corners.tlx)} ${percentToY(corners.tly)} Q ${percentToX(midpoints.lx)} ${percentToY(
                midpoints.ly
            )} ${percentToX(corners.blx)} ${percentToY(corners.bly)}`"
            class="stroke-red-500 stroke-2 drop-shadow-sm-red fill-transparent"
        />
        <path
            :d="`M ${percentToX(corners.trx)} ${percentToY(corners.try)} Q ${percentToX(midpoints.rx)} ${percentToY(
                midpoints.ry
            )} ${percentToX(corners.brx)} ${percentToY(corners.bry)}`"
            class="stroke-red-500 stroke-2 drop-shadow-sm-red fill-transparent"
        />
        <path
            :d="`M ${percentToX(corners.blx)} ${percentToY(corners.bly)} Q ${percentToX(midpoints.bx)} ${percentToY(
                midpoints.by
            )} ${percentToX(corners.brx)} ${percentToY(corners.bry)}`"
            class="stroke-red-500 stroke-2 drop-shadow-sm-red fill-transparent"
        />
        <circle :cx="`${corners.tlx}%`" :cy="`${corners.tly}%`" r="10" class="drop-shadow-lg" />
        <circle :cx="`${corners.trx}%`" :cy="`${corners.try}%`" r="10" class="drop-shadow-lg" />
        <circle :cx="`${corners.blx}%`" :cy="`${corners.bly}%`" r="10" class="drop-shadow-lg" />
        <circle :cx="`${corners.brx}%`" :cy="`${corners.bry}%`" r="10" class="drop-shadow-lg" />

        <circle :cx="`${corners.tlx}%`" :cy="`${corners.tly}%`" r="3" class="fill-red-500 drop-shadow-sm-red" />
        <circle :cx="`${corners.trx}%`" :cy="`${corners.try}%`" r="3" class="fill-red-500 drop-shadow-sm-red" />
        <circle :cx="`${corners.blx}%`" :cy="`${corners.bly}%`" r="3" class="fill-red-500 drop-shadow-sm-red" />
        <circle :cx="`${corners.brx}%`" :cy="`${corners.bry}%`" r="3" class="fill-red-500 drop-shadow-sm-red" />
    </svg>
</template>
