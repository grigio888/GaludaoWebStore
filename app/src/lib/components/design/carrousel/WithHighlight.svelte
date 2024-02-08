<script>
    // ----------- PROPS ----------- //
    export let items;

    // ------ PAGE COMPONENTS ------ //
    import HighlightCard from '$comp/design/HighlightCard.svelte';

    // ----------- LOGIC ----------- //
    // The main idea is to show a item in highlight and 3 options bellow them.
    // If it has more than 3 options, arrows will be displayed to navigate
    // through them.
    $: currentIndex = 0
    $: displayedItem = items[currentIndex];

    $: listOfOptions = []; // this list is what will be displayed in the options.

    $: arrows = [
        currentIndex != 0,
        displayedItem != items[items.length-1]
    ];

    // determining wich should be on the listOfOptions
    $: if (currentIndex < 2) {
        // list will fetch the first 3 items from the list
        listOfOptions = items.slice(0, 3)
    } else if (currentIndex > items.length - 2) {
        // list will fetch the last 3 items from the list
        listOfOptions = items.slice(items.length - 3, items.length)
    } else {
        // this section will maintain the select item on the middle and show
        // the option before and after it.
        listOfOptions = items.slice(currentIndex - 1, currentIndex + 2)
    }
</script>

<div class="carrousel">
    <HighlightCard item={displayedItem} scale={1.5} />
    <div class="options">
        <button class="arrow" class:show={arrows[0]} on:click={() => {if (currentIndex > 0) currentIndex = currentIndex - 1}}>
            <i class="fa-solid fa-caret-left" />
        </button>
        {#each listOfOptions as opt}
        <button
            class="item" class:selected={opt == items[currentIndex]}
            on:click={() => {currentIndex = items.indexOf(opt)}}
            >
            <img
                src="{opt.image}"
                alt="{opt.title}"
            />
        </button>
        {/each}
        <button class="arrow" class:show={arrows[1]} on:click={() => {if (currentIndex < items.length) currentIndex = currentIndex + 1}}>
            <i class="fa-solid fa-caret-right" />
        </button>
    </div>
</div>

<style lang="scss">
    .carrousel, .options, button {
        display: flex;
        align-items: center;
    }

    .options, button {
        justify-content: center;
    }

    .carrousel {
        flex-direction: column;
        gap: 1em;

        .options {
            justify-content: space-between;
            width: 100%;

            padding: .75em 1em;

            border-radius: var(--borderRadius);
            background-color: rgb(0, 0, 0, .5);

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

            .item {
                width: 5em;
                height: 5em;

                border: 1px solid var(--themeColor);
                border-radius: var(--borderRadius);
                
                &.selected {
                    box-shadow: 0 0 20px var(--themeColor);
                }
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                    border-radius: var(--borderRadius);
                }
            }
        }
    }
</style>