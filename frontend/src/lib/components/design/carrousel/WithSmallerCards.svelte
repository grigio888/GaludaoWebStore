<script>
    // ---------- IMPORTS ---------- //
    import { createEventDispatcher } from 'svelte';

    // ----------- PROPS ----------- //
    export let options;

    // ------ PAGE COMPONENTS ------ //
    import SmallCard from '$comp/design/SmallCard.svelte';

    // ----------- LOGIC ----------- //
    const dispatch = createEventDispatcher()
</script>

<div class="carrousel">
    <button class="arrow" class:show={options.previous} on:click={() => dispatch('previous')}>
        <i class="fa-solid fa-caret-left" />
    </button>
    <div class="display">
        {#each options.results as opt}
            <SmallCard item={opt} />
        {/each}
    </div>
    <button class="arrow" class:show={options.next} on:click={() => dispatch('next')}>
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
        justify-content: center;
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

        .display {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1em;

            max-width: 60em;
        }
    }

    @media (max-width: 768px) {
        .carrousel {
            flex-direction: column;

            .arrow {
                display: none;

                &.show {
                    display: block;
                }
            }

            .display {
                gap: .5em;

                max-height: 40vh;
                overflow-y: auto;

                :global(> .frame) {
                    width: 10em;
                    height: 13em;
                }
            }
        }
    }
</style>