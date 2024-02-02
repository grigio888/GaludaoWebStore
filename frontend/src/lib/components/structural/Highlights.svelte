<script>
    // ----------- PROPS ----------- //
    export let pagination;

    // ------ PAGE COMPONENTS ------ //
    import HighlightCard from '$comp/design/HighlightCard.svelte';
    import CarrouselWithHighlight from '$comp/design/carrousel/WithHighlight.svelte';
</script>

<section>
    <div class="title">
        <h1>
            Destaques
        </h1>
        <hr />
    </div>
    <div class="display">
        {#each pagination.results as item}
            <HighlightCard {item} scale={1.5} tilted />
        {/each}
    </div>
    <div class="display-mobile">
        <CarrouselWithHighlight items={pagination.results} />
    </div>
</section>

<style lang="scss">
    section, .title, .display {
        display: flex;
        align-items: center;
    }

    section {
        flex-direction: column;
        gap: 2em;

        width: 100%;

        .title {
            gap: 1em;

            width: 100%;

            text-align: left;

            hr {
                height: var(--borderWidth);
                width: 100%;

                border-color: var(--themeColor);
            }
        }

        .display-mobile {
            display: none;
        }
    }

    @media (max-width: 768px) {
        section {

            .display {
                display: none;
            }

            .display-mobile {
                display: flex;
                flex-direction: column;

                width: 100%;
            }
        }
    }
</style>