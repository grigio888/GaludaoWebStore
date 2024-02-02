<script>
    // ----------- PROPS ----------- //
    export let data;

    // ------ PAGE COMPONENTS ------ //
    import Highlights from '$comp/structural/Highlights.svelte';
    import Search from '$comp/structural/Search.svelte';
</script>

<div>
    <Highlights pagination={data.highlight} />

    <Search pagination={data.search} rarity={data.rarity} />
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        gap: 10em;

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