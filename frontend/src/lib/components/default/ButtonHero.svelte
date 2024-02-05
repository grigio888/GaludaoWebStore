<script>
    // ---------- IMPORTS ---------- //
    import { createEventDispatcher } from "svelte";

    // ----------- PROPS ----------- //
    export let hero;

    // ----------- LOGIC ----------- //
    let dispatch = createEventDispatcher();

    let heroSample = {
        title: hero,
        slug: hero.toLowerCase().toLowerCase().replace(' ', '_').replace('-', ''),
        icon: hero.toLowerCase().toLowerCase().replace(' ', '_').replace('-', '')
    }

    let image = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroSample.icon}.png`;
    if (heroSample.icon == 'outros') {
        image = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d7/Flying_Courier_%28Radiant%29_icon.png'
    } else if (heroSample.icon == 'cenário') {
        image = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/88/Siltbreaker_Orb_of_Passage_icon.png';
    }

    let active = false;
</script>

<button
    class:active={active}
    on:click={() => {
        active = !active;
        dispatch('click', heroSample.slug);
    }}
    >
    <img src={image} alt="{heroSample.title}">
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