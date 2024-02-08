<script>
    // ----------- PROPS ----------- //
    export let data;

    // ------ PAGE COMPONENTS ------ //
    import Metatags from '$comp/Metatags.svelte';
    import Outdoor from '$comp/structural/Outdoor.svelte';
    import Highlights from '$comp/structural/Highlights.svelte';
    import Search from '$comp/structural/Search.svelte';
</script>

<Metatags
    title="Catálogo"
    keywords="catálogo, itens, personagem, herói, raridade"
/>

<div>
    <Outdoor data={data.outdoor} />

    <Highlights pagination={data.highlight} />

    <Search pagination={data.search} rarity={data.rarity} heroes={data.heroes} />
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        gap: 5em;

        width: 100%;

        padding: 5em 7.5em;
    }

    @media (max-width: 768px) {
        div {
            gap: 5em;

            padding: 2em 1em;
        }
    }
</style>