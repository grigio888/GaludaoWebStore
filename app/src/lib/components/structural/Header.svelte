<!-- 
    Navbar module.

    This module is responsible for displaying the Header Navbar.
    Z-index is setted a 5000, which must be to top level of the project.
 -->

<script>
    // ---------- IMPORTS ---------- //
    import { PUBLIC_APP_URL } from '$env/static/public';

    import { headerOptions } from './headerOptions.js'
    import CartSmall from '$comp/structural/cart/Small.svelte'

    // ----------- PROPS ----------- //
    export let toShow;

    // ----------- LOGIC ----------- //
    let showMenu = false;
    let options = headerOptions()
</script>

<header class:show={toShow}>
    <a href="/">
        <img
            src="{PUBLIC_APP_URL}/static/assets/banner/default.webp"
            alt="Galudão WebStore Logo"
        />
    </a>
    <button on:click={() => showMenu = true}>
        <i class="fa-solid fa-angles-left"></i>
    </button>
    <navbar class:hided={!showMenu}>
        <button on:click={() => showMenu = false}>
            <i class="fa-solid fa-angles-right"></i>
        </button>
        <CartSmall on:click={() => showMenu = false} />
        {#each options as opt}
        <a href={opt.link} class="td-none" on:click={() => showMenu = false} class:onlyMobile={opt.onlyMobile}>
            <i class="fa-solid {opt.icon}"></i>
            <span>{opt.title}</span>
        </a>
        {/each}
    </navbar>
</header>

<style lang="scss">
    header, navbar, a {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header {
        position: sticky;
        top: 0;
        left: 0;

        height: var(--headerHeight);
        width: 100%;

        padding-inline: 1em;

        background-color: var(--backgroundColor);

        border-bottom: 1px solid var(--themeColor);

        z-index: 5000;

        opacity: 0;
        pointer-events: none;
        transition: var(--transitionMedium) ease-in-out opacity;

        &.show {
            opacity: 1;
            pointer-events: all;
        }

        > a {
            height: 100%;

            img {
                height: 80%;
            }
        }

        button {
            display: none;
        }

        navbar {
            gap: 1em;

            a {
                gap: .5em;

                &.onlyMobile {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 768px) {
        header {

            button {
                display: flex;
                align-items: center;

                padding: .25em;

                border: none;
                background-color: transparent;
                color: var(--themeColor);

                i {
                    font-size: 1.75em;
                }
            }


            navbar {
                position: absolute;
                top: 0;
                right: 0;

                flex-direction: column;
                align-items: end;
                justify-content: start;

                width: 100%;
                height: 100dvh;
                
                padding: .65em;

                background-color: var(--backgroundColor);

                font-size: 1.75em;

                overflow: hidden;
                transition: var(--transitionMedium);
                transition-property: padding-inline, width;

                &.hided {
                    padding-inline: 0;
                    width: 0;
                }

                a {

                    &.onlyMobile {
                        display: flex;
                    }
                }

            }
        }
    }
</style>