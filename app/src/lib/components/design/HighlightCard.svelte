<script>
    // ---------- IMPORTS ---------- //
    import { addZeroes } from "$tools/utils";
    import { toggleProduct, cartStore } from "$comp/structural/cart/store";
    import { _ } from '$translate/i18n';

    // ----------- PROPS ----------- //
    export let item;

    export let scale = 1;
    export let tilted = null;

    // ------ PAGE COMPONENTS ------ //
    import Button from "$comp/default/Button.svelte";

    // ----------- LOGIC ----------- //
    $: inCart = $cartStore.some((cartItem) => cartItem.id === item.id);
</script>

<div class="frame" class:tilted style="--scale: {scale}">
    <img
        src="{item.image}"
        alt=""
    />
    <div class="content">
        <div class="title">
            <h2>
                {item.title}
            </h2>
            <hr>
        </div>
        <p class="description">
            {item.description}
        </p>
        <div class="cta-area">
            {#if item.steam_price}
            <p>
                {_("R$")} {addZeroes(item.steam_price)}
            </p>
            {/if}
            <Button
                secondary={!inCart} animated pill
                on:click={() => toggleProduct(item)}
                >
                {#if inCart}
                    <i class="fa-solid fa-check"></i>
                {:else}
                    <i class="fa-solid fa-cart-shopping"></i>
                {/if}
                <span>{_("R$")} {addZeroes(item.store_price)}</span>
            </Button>
        </div>
    </div>
</div>

<style lang="scss">
    .frame {
        position: relative;

        width: calc(10em * var(--scale));
        height: calc(14em * var(--scale));

        border: var(--borderWidth) solid var(--themeColor);
        border-radius: var(--borderRadius);

        box-shadow: 0 0 10px var(--shadowColor);

        transition: var(--transitionFast);

        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            object-fit: cover;

            z-index: 1;
        }

        .content {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            height: 100%;

            z-index: 2;

            .title {
                width: 100%;

                h2 {
                    padding: .6em 1em .4em;

                    font-size: 0.9em;
                }

                hr {
                    height: var(--borderWidth);
                    width: 100%;

                    border-color: var(--themeColor);
                }
            }

            .description {
                padding: 1em;

                text-transform: capitalize;
            }

            .cta-area {
                width: 75%;

                padding: 1em;

                text-align: center;

                p {
                    text-decoration: line-through;
                    font-size: .9em;
                    font-weight: 800;
                    color: white;
                }

                span {
                    font-weight: 800;
                }
            }
        }

        &.tilted { 
            transform: perspective(1000px) rotateY(60deg);

            .content {
                position: relative;

                height: 100%;

                z-index: 2;

                transition: var(--transitionFast);
                transition-property: top, background-color, transform;

                .title {
                    position: absolute;
                    top: 50%;
                    left: 0;

                    transform: translateY(-50%);

                    transition: var(--transitionFast);
                    transition-property: top, transform, text-shadow;

                    hr {
                        width: 50%;
                    }
                }

                .description {
                    position: absolute;
                    top: 50%;
                    left: -100%;

                    transform: translateY(-50%);

                    transition: var(--transitionFast);
                    transition-property: left, transform, text-shadow;
                }

                .cta-area {
                    position: absolute;
                    left: 50%;
                    bottom: 0;

                    transform: translateX(-50%);
                }
            }

            &:not(:last-child) {
                margin-right: calc(-5.5em * var(--scale));

                &:hover {
                    margin-right: calc(-1.5em * var(--scale));
                }
            }

            &:hover {
                margin-left: calc(2em * var(--scale));

                box-shadow: 0 0 10px var(--shadowColorActive);

                transform: scale(1.2);

                z-index: 10;

                .content {

                    .title {
                        top: 0;

                        transform: none;

                        text-shadow: var(--textShadow);

                        hr {
                            width: 100%;
                        }
                    }

                    .description {
                        left: 0;

                        text-shadow: var(--textShadow);
                    }
                }
            }
        }
    }
</style>