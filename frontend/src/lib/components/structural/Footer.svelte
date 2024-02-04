<!-- 
    Footer module.

    This module is responsible for displaying the Footer Navbar.
    Z-index is setted a 4000, which must be to top level of the document, but
    bellow the Header.
-->

<script>
    // ---------- IMPORTS ---------- //
    import { showModal } from "$comp/default/modal/store.js";

    // ----------- PROPS ----------- //
    export let toShow;

    // ----------- LOGIC ----------- //
    let contactData = {
        title: 'Contatos',
        content: `
        <p>
            Galudão (Toasty)
        </p>
        <a href="https://www.instagram.com/galudaostore/" target="_blank">
            <i class="fa-brands fa-instagram"></i> 
            <b>@GaludaoStore</b>
        </a>
        `
    }
    let infoData = {
        title: 'Informação',
        content: `
        <p>
            Website em desenvolvimento por:
        </p>
        <br>
        <a href="https://www.linkedin.com/in/vinicius-grigio/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            <b>Vinicius Grigio</b>
        </a>
        <br>
        <a href="https://www.linkedin.com/in/emows-lemos/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            <b>Emows Lemos</b>
        </a>
        `
    }
    let helpData = {
        title: 'Ajuda',
        content: `
        <p>
            Precisa de ajuda?
        </p>
        <p>
            Entre em contato com os administradores do sistema.
        </p>
        `
    }
</script>

<footer class:show={toShow}>
    <navbar>
        <button class="td-none" on:click={() => showModal(contactData)}>
            <i class="fa-solid fa-envelope" />
            <span>Contatos</span>
        </button>
        <button class="td-none" on:click={() => showModal(infoData)}>
            <i class="fa-solid fa-circle-info" />
            <span>Informação</span>
        </button>
        <button class="td-none" on:click={() => showModal(helpData)}>
            <i class="fa-solid fa-circle-question" />
            <span>Ajuda</span>
        </button>
    </navbar>
</footer>

<style lang="scss">
    footer, navbar, button {
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

            button {
                gap: .25em;

                border: none;
                background-color: transparent;

                font-size: .9em;
                color: var(--textColor);

                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        footer {

            navbar {

                button {

                    span {
                        display: none;
                    }
                }
            }
        }
    }
</style>