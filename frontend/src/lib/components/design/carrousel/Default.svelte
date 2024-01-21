<script>
    // ----------- PROPS ----------- //
    export let highlight;

    // ------ PAGE COMPONENTS ------ //
    import HighlightCard from '$comp/design/HighlightCard.svelte';
</script>

<div class="carrousel">
    <button class="arrow" class:show={highlight.previous} on:click={() => {if (highlight.previous) console.log('call API to fetch the previous page')}}>
        <i class="fa-solid fa-caret-left" />
    </button>
    <div class="display">
        {#each highlight.results as opt}
            <HighlightCard item={opt} scale={1.5} tilted />
        {/each}
    </div>
    <button class="arrow" class:show={highlight.next} on:click={() => {if (highlight.next) console.log('call API to fetch the next page')}}>
        <i class="fa-solid fa-caret-right" />
    </button>
</div>

<style lang="scss">
    .carrousel, button, .display {
        display: flex;
        align-items: center;
    }
    
    button {
        justify-content: center;
    }

    .carrousel {
        gap: 1em;

        .arrow {
            height: 1.5em;
            width: 1.5em;

            border: none;
            border-radius: var(--borderRadius);

            background-color: var(--themeColor);

            font-size: 1.25em;

            opacity: 0;
            pointer-events: none;

            transition: opacity var(--transitionFast);

            &.show {
                opacity: 1;
                pointer-events: all;
            }
        }
    }
</style>