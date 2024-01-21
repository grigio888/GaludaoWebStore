<script>
    // ----------- PROPS ----------- //
    export let data;

    // ------ PAGE COMPONENTS ------ //
    import HighlightCard from '$comp/design/HighlightCard.svelte';
    import CarrouselWithHighlight from '$comp/design/carrousel/WithHighlight.svelte';
</script>

<section class="highlights">
    <div class="title">
        <h1>
            Destaques
        </h1>
        <hr />
    </div>
    <div class="display">
        {#each data.highlight.results as item}
            <HighlightCard {item} scale={1.5} tilted />
        {/each}
    </div>
    <div class="display-mobile">
        <CarrouselWithHighlight items={data.highlight.results} />
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

        padding-top: 2.5em;

        .title {
            gap: 1em;

            width: 80%;

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

            .title {
                width: 95%;
            }

            .display {
                display: none;
            }

            .display-mobile {
                display: flex;
                flex-direction: column;

                width: 95%;
            }
        }
    }
</style>