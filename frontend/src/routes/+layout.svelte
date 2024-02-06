<script>
    // ---------- IMPORTS ---------- //
    import './style.css';

    import { page } from '$app/stores';

    import { locale } from '$translate/store.js';
    import { cartStore } from '$comp/structural/cart/store';

    // ----------- PROPS ----------- //
    export let data;

    // --------- COMPONENTS -------- //
    import Header from "$comp/structural/Header.svelte";
    import Footer from "$comp/structural/Footer.svelte";
    import BackgroundVideo from "$comp/design/BackgroundVideo.svelte";
    import PageTransition from '$comp/design/PageTransition.svelte';

    import Modal from '$comp/default/modal/Default.svelte';
    import CartModal from '$comp/structural/cart/Default.svelte';
    import CartButton from '$comp/structural/cart/Button.svelte';

    // ----------- LOGIC ----------- //
    $: locale.set(data.lang); // needed to set the language client-side

    // the header and footer will be hided on the first page.
    $: showNavigators = $page.url.pathname != '/'

    $: enableCart = $cartStore.items.length > 0;
</script>

<Header toShow={showNavigators} />

<PageTransition refresh={data.url}>
<div>
    <slot />
</div>
</PageTransition>

<BackgroundVideo />

<Footer toShow={showNavigators} />

<Modal />

{#if enableCart}
<CartModal />
{#if showNavigators}
<CartButton />
{/if}
{/if}

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        --ammountToSubtract: calc(var(--headerHeight) + var(--footerHeight));

        min-height: calc(100vh - var(--ammountToSubtract));
        min-height: calc(100dvh - var(--ammountToSubtract));
    }
</style>