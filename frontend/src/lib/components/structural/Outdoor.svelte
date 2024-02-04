<script>
    // ---------- IMPORTS ---------- //
    import { onMount } from 'svelte';

    // ----------- PROPS ----------- //
    export let data;

    // ----------- LOGIC ----------- //
    // basic logic to change the sample
    let currentSample = 0;
    $: sample = data[currentSample];

    // logic to self change the sample
    let percUntilChange = 0;
    let isHovering = false;
    $: if (percUntilChange >= 100) {
        percUntilChange = 0;
        currentSample = (currentSample + 1) % data.length;
    };

    onMount(() => {
        let timer = setInterval(() => {if (!isHovering) percUntilChange += .25}, 25);
        return () => clearInterval(timer);
    });
</script>

<section
    on:mouseenter={() => isHovering = true}
    on:mouseleave={() => isHovering = false}
    role="banner"
    >
    {#if sample.image}
        <img src={sample.image} alt={sample.title} class:dimmed={sample.title} />
    {/if}
    {#if sample.title}
        <div class="content">
            <h1>{sample.title}</h1>
            {#if sample.description}
            {@html sample.description}
            {/if}
        </div>
    {/if}
    <div class="selector">
        {#each data as s, i}
            <button class="selector-item" on:click={() => {currentSample = i; percUntilChange = 0;}}>
                <i class="{currentSample == i ? 'fa-solid' : 'fa-regular'} fa-circle"></i>
            </button>
        {/each}
    </div>
    <hr class="percentage" style="--width: {percUntilChange}%"/>
</section>

<style lang="scss">
    section {
        position: relative;

        width: 100%;
        height: 30em;

        border: var(--borderWidth) solid var(--themeColor);
        border-radius: var(--borderRadius);

        background-color: var(--backgroundColorFaded);

        img {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            object-fit: cover;

            &.dimmed {
                opacity: .5;
            }
        }

        .content {
            position: relative;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100%;

            padding: 1em 3em;

            z-index: 2;

            > :global(*) {
                text-align: center;
                text-shadow: var(--textShadow);
                font-weight: bold;
            }

            // loop through h1 to h6 and define the font-size from 2.5em to 1.5em
            @for $i from 1 through 6 {
                :global(h#{$i}) {
                    font-size: calc(2.5em - 0.25em * $i);
                }
            }

            :global(p) {
                font-size: 1.5em;
            }
        }

        .selector {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);

            display: flex;
            justify-content: center;
            gap: 1em;

            padding-block: 1em;

            z-index: 3;

            .selector-item {
                background-color: transparent;
                border: none;
                border-radius: 50%;

                i {
                    color: var(--themeColor);
                    font-size: 1.25em;
                }
            }
        }

        .percentage {
            position: absolute;
            bottom: 0;
            left: 0;

            height: var(--borderWidth);
            width: var(--width);

            border: none;
            background-color: var(--themeColor);
        }
    }

    @media (max-width: 768px) {
        section {

            .content {
                justify-content: flex-start;

                padding: 1em;
                padding-bottom: 3em;

                overflow-y: auto;
            }
        }
    }
</style>