<script>
    // ---------- IMPORTS ---------- //
    import { cartStore, cartModalInfo } from './store.js';

    // ----------- LOGIC ----------- //
    $: numberOfItems = $cartStore.length;
</script>

<button
    on:click={() => $cartModalInfo.show = true}
    items="{numberOfItems}"
    >
    <i class="fa-solid fa-cart-shopping"></i>
</button>

<style lang="scss">
    button {
        display: none;

        position: fixed;
        bottom: 1em;
        right: 1em;

        height: 5em;
        width: 5em;

        border: var(--borderWidth) solid var(--themeColor);
        border-radius: 50%;

        background-color: var(--backgroundColorFaded);
        box-shadow: 0 0 10px var(--shadowColor);
        
        cursor: pointer;

        z-index: 3000;
        overflow: hidden;

        i {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-size: 2em;
            color: var(--themeColor);
        }

        &::after {
            content: attr(items);
            position: absolute;
            bottom: 0;
            right: 50%;
            transform: translateX(50%);

            display: flex;
            justify-content: center;
            align-items: center;

            min-width: 100%;

            padding-inline: .25em;

            background-color: var(--themeColor);

            color: darkred;
            font-weight: 800;
        }
    }

    @media (max-width: 768px) {
        button {
            display: block;
        }
    }
</style>