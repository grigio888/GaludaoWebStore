<script>
    // ---------- IMPORTS ---------- //
    import { createEventDispatcher } from "svelte";

    import { cartStore, cartModalInfo } from './store.js';

    // ----------- LOGIC ----------- //
    let dispatch = createEventDispatcher();
    $: numberOfItems = $cartStore.items.length;
</script>

<button
    class:show={numberOfItems > 0}
    on:click={() => {
        dispatch('click');
        $cartModalInfo.show = true;
    }}
    >
    <i class="fa-solid fa-cart-shopping" items="{numberOfItems}"></i>
    <span>Carrinho</span>
</button>

<style lang="scss">
    button {
        display: none;

        border: none;
        background-color: transparent;

        font-size: 1em;
        color: var(--themeColor);
        white-space: nowrap;
        
        cursor: pointer;

        &.show {
            display: block;
        }

        i {
            position: relative;

            &::after {
                content: attr(items);
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(50%, -50%);

                display: flex;
                justify-content: center;
                align-items: center;

                min-width: 1em;
                height: 1.35em;

                padding-inline: .25em;

                border: 1px solid var(--backgroundColor);
                border-radius: 5em;

                background-color: var(--themeColor);

                font-size: .65em;
                color: darkred;
            }
        }
    }
</style>