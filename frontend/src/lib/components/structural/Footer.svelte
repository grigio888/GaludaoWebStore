<!-- 
    Footer module.

    This module is responsible for displaying the Footer Navbar.
    Z-index is setted a 4000, which must be to top level of the document, but
    bellow the Header.
-->

<script>
    // ----------- PROPS ----------- //
    export let toShow;
</script>

<footer class:show={toShow}>
    <navbar>
        <a href="/" class="td-none">
            <i class="fa-solid fa-envelope" />
            <span>Contatos</span>
        </a>
        <a href="/" class="td-none">
            <i class="fa-solid fa-circle-info" />
            <span>Informação</span>
        </a>
        <a href="/" class="td-none">
            <i class="fa-solid fa-circle-question" />
            <span>Ajuda</span>
        </a>
    </navbar>
</footer>

<style lang="scss">
    footer, navbar, a {
        display: flex;
        align-items: center;
    }

    footer {
        justify-content: center;

        height: var(--footerHeight);
        width: 100%;

        padding-inline: 1.5em;

        background-color: var(--backgroundColor);

        border-top: 1px solid var(--themeColor);

        z-index: 4000;

        opacity: 0;
        pointer-events: none;
        transition: var(--transitionMedium) ease-in-out opacity;

        &.show {
            opacity: 1;
            pointer-events: all;
        }

        navbar {
            justify-content: space-evenly;
            gap: 1em;

            width: 100%;

            a {
                gap: .25em;

                span {
                    font-size: .9em;
                }
            }
        }
    }

    @media (max-width: 768px) {
        footer {

            navbar {

                a {

                    span {
                        display: none;
                    }
                }
            }
        }
    }
</style>