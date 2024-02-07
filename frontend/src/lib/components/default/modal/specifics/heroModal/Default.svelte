<!--
    @component New Modal
    
    This modal is used to display information to the user, but, unlike the Main modal,
    it isn't controlled by passing props to it. Instead, it uses a store to get the
    information it needs to display.


-->

<script>
    // ---------- IMPORTS ---------- //
    import { createEventDispatcher } from "svelte";
    import { heroModalInfo } from "./store.js";
    import { _ } from '$translate/i18n';

    // ----------- PROPS ----------- //
    export let heroes = [];

    // --------- COMPONENTS -------- //
    import Hero from "$comp/default/ButtonHero.svelte";
    import Button from "$comp/default/Button.svelte";

    // ----------- LOGIC ----------- //
    let dispatch = createEventDispatcher();

    let dialog;
    $: if (dialog) $heroModalInfo.show ? dialog.showModal() : dialog.close();

    let sendInfo = false;
    let elementsActive = [];

    function toggleItemInArray(item) {
        if (elementsActive.includes(item)) {
            elementsActive = elementsActive.filter((el) => el !== item);
        } else {
            elementsActive = [...elementsActive, item];
        }
    }

    function closeDialog() {
        $heroModalInfo.show = false;
    }
    function isToSendInfo() {
        dispatch("closed", sendInfo ? elementsActive : undefined);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={isToSendInfo}
    >

    <button id="closeButton" on:click={() => {
            sendInfo = false;
            closeDialog();
        }}>
        <i class="fa-solid fa-times" />
    </button>

    <h2>{_("Selecione os Heróis que deseja filtrar:")}</h2>

    <div class="heroes-layout">
        {#each heroes as hero}
            <Hero
                {hero}
                on:click={(e) => toggleItemInArray(e.detail)}
            />
        {/each}
    </div>

    <div class="cta-area">
        <Button
            standOut pill secondary={false}
            on:click={() => {
                sendInfo = true;
                closeDialog();
            }}>
            {_("Confirmar")}
        </Button>
        <Button
            animated pill secondary
            on:click={() => {
                sendInfo = false;
                closeDialog();
            }}>
            {_("Cancelar")}
        </Button>
    </div>
</dialog>

<style lang="scss">
    dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 95vw;
        max-width: 80em;
        max-height: 40em;
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

    .heroes-layout {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: .5em;
    }

    .cta-area {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    @media (max-width: 768px) {
        dialog {
            width: min(30em, 95vw);
            max-height: 35em;
            padding: 1em;

            .cta-area {
                width: 95%;
                flex-direction: column;
                gap: 1em;
            }
        }
    }
</style>