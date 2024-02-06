<script>
    // ---------- IMPORTS ---------- //
    import { cartModalInfo, cartStore, toggleProduct } from "./store.js";

    // --------- COMPONENTS -------- //
    import Button from "$comp/default/Button.svelte";

    // ----------- LOGIC ----------- //
    let dialog;
    $: if (dialog) $cartModalInfo.show ? dialog.showModal() : dialog.close();
    let closeDialog = () => $cartModalInfo.show = false;


    $: totalItems = $cartStore.length;
    $: subtotal = $cartStore.reduce((acc, item) => acc + item.store_price, 0);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={closeDialog}
    >

    <button id="closeButton" on:click={closeDialog}>
        <i class="fa-solid fa-times" />
    </button>

    <h2>Carrinho</h2>

    <div class="content">
        <div class="items">
            {#each $cartStore as item}
                <div class="item">
                    <div class="frame">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div class="info">
                        <h3>{item.title}</h3>
                        <span>R$ {item.store_price.toFixed(2)}</span>
                    </div>
                    <div class="remove">
                        <Button
                            secondary
                            animated
                            pill
                            on:click={() => {
                                toggleProduct(item)
                                if ($cartStore.length === 0) closeDialog();
                            }}
                            >
                            <i class="fa-solid fa-times" />
                        </Button>
                    </div>
                </div>
                {#if item !== $cartStore[$cartStore.length - 1]}
                    <hr class="vr">
                {/if}
            {/each}
        </div>
        <div class="subtotal">
            <div class="upper">
                <div>
                    <span>Itens:</span>
                    <span>{totalItems}</span>
                </div>
                <hr class="vr">
                <div>
                    <span>Subtotal:</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                </div>
            </div>
            <div>
                <Button
                    standOut pill secondary={false}
                    on:click={() => {
                        closeDialog();
                    }}>
                    <i class="fa-solid fa-check" />
                    Checkout
                </Button>
            </div>
        </div>
    </div>

    <div class="cta-area">
        <Button
            animated pill secondary
            on:click={() => {
                closeDialog();
            }}>
            <i class="fa-solid fa-arrow-left" />
            Voltar às compras
        </Button>
    </div>
</dialog>

<style lang="scss">
    dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 60em;
        max-height: 50em;
        overflow-y: auto;

        padding: 2em;

        border: solid var(--themeColor);
        border-width: var(--borderWidth);
        border-radius: var(--borderRadius);

        background-color: var(--backgroundColor);
        color: var(--textColor);

        &[open] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 1em;

            text-align: center;

            animation: fadeIn var(--transitionFast) ease-in-out;
            
            z-index: 2000;
            
            &::backdrop {
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(2px);

                animation: fadeInFilter var(--transitionFast) ease-in-out;
            }
        }

        :global(a) {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    #closeButton {
        position: absolute;
        top: 0;
        right: 0;

        width: 2em;
        height: 2em;

        background: transparent;
        color: var(--textColor);
        
        font-size: 1.1em;

        border: none;

        transition: border-color;
        transition-duration: var(--transitionFast);

        cursor: pointer;

        &:focus, &:hover {
            outline: none;
        }

        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .content {
        display: flex;
        gap: 1em;
        
        width: 100%;
        padding: 1em;

        .items, .subtotal {
            display: flex;
            flex-direction: column;
            
            border: 1px solid var(--themeColor);
            border-radius: var(--borderRadius);
        }
        
        .items {
            flex: .8;
            gap: .25em;

            height: 30em;

            overflow-y: auto;

            .item {
                display: flex;
                align-items: center;
                gap: 1em;

                padding: .25em .5em;

                .frame {
                    height: 5em;
                    aspect-ratio: 1;

                    border: 1px solid var(--themeColor);
                    border-radius: var(--borderRadius);

                    overflow: hidden;

                    img {
                        height: 100%;
                        width: 100%;

                        object-fit: cover;
                    }
                }

                .info {
                    display: flex;
                    flex: 1;
                    flex-direction: column;

                    text-align: start;

                    h3 {
                        font-size: 1em;
                    }
                }


                .remove {
                    display: flex;
                    flex: .05;
                    flex-direction: column;
                    gap: .5em;
                }
            }
        }

        .subtotal {
            flex: .2;
            gap: 1em;
            justify-content: space-between;
            
            padding: 1em;

            div {
                display: flex;
                flex-direction: column;
                gap: .5em;

                text-align: center;
            }
        }
    }

    .cta-area {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    @media (max-width: 768px) {
        dialog {
            width: min(30em, 95vw);
            height: 95vh;

            padding-inline: 0;

            .content {
                flex-direction: column;
                gap: 1em;

                height: 50em;

                .items {
                    height: 20em;

                    .item {
                        .frame {
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>