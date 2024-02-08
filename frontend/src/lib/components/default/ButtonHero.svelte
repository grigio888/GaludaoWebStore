<script>
    // ---------- IMPORTS ---------- //
    import { createEventDispatcher } from "svelte";

    // ----------- PROPS ----------- //
    export let hero;

    // ----------- LOGIC ----------- //
    let dispatch = createEventDispatcher();

    let active = false;
</script>

<button
    class:active={active}
    on:click={() => {
        active = !active;
        dispatch('click', hero.slug);
    }}
    >
    <img src={hero.imageUrl} alt="{hero.title}">
</button>

<style lang="scss">
    button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 6em;
        aspect-ratio: 2/1;

        border: 1px solid var(--themeColor);
        border-radius: var(--borderRadius);

        overflow: hidden;

        transition: border-color, box-shadow, transform;
        transition-duration: var(--transitionFast);
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &.active {
            border-color: aqua;
            box-shadow: 0 0 1em aqua;
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 768px) {
        button {
            width: 7.5em;
        }
    }
</style>