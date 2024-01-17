<script>
    // ---------- IMPORTS ---------- //
    import './style.css';

    import { page } from '$app/stores';

    import { locale } from '$translate/store.js';

    // ----------- PROPS ----------- //
    export let data;

    // --------- COMPONENTS -------- //
    import Header from "$comp/structural/Header.svelte";
    import Footer from "$comp/structural/Footer.svelte";
    import BackgroundVideo from "$comp/design/BackgroundVideo.svelte";

    // ----------- LOGIC ----------- //
    $: locale.set(data.lang); // needed to set the language client-side

    // the header and footer will be hided on the first page.
    $: showNavigators = $page.url.pathname != '/'
</script>

<Header toShow={showNavigators} />

<div>
    <slot />
</div>

<BackgroundVideo />

<Footer toShow={showNavigators} />

<style>
    div {
        min-height: 89.5vh;
        min-height: 89.5dvh;
    }
</style>