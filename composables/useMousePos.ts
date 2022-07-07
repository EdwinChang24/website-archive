/**
 * Provides dynamic references to the mouse's current position as percentages of the screen height and width.
 * For example, if the cursor is all the way to the right and halfway down the screen, `pageX` will be 100 and `pageY` will be 50.
 */
export default function () {
    const x = ref(0);
    const y = ref(0);

    function update(event: MouseEvent) {
        x.value = (100 * event.pageX) / window.innerWidth;
        y.value = (100 * event.pageY) / window.innerHeight;
    }

    onMounted(() => {
        window.addEventListener("mousemove", update);
    });
    onUnmounted(() => {
        window.removeEventListener("mousemove", update);
    });

    return {
        x: readonly(x),
        y: readonly(y),
    };
}
