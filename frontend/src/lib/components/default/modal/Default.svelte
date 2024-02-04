<!--
    @component New Modal
    
    This modal is used to display information to the user, but, unlike the Main modal,
    it isn't controlled by passing props to it. Instead, it uses a store to get the
    information it needs to display.


-->

<script>
    // ---------- IMPORTS ---------- //
    import { modalInfo } from "./store.js";

    // --------- COMPONENTS -------- //
    import Button from "$comp/default/Button.svelte";

    // ----------- LOGIC ----------- //
    let dialog;

    $: if (dialog) $modalInfo.show ? dialog.showModal() : dialog.close();

    let closeDialog = () => $modalInfo.show = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={closeDialog}
    >

    {#if $modalInfo.showCloseButton}
    <button id="closeButton" on:click={closeDialog}>
        <i class="fa-solid fa-times" />
    </button>
    {/if}

    <h2>{$modalInfo.title}</h2>

    {#if $modalInfo.content}
    <p>{@html $modalInfo.content}</p>
    {/if}

    {#if $modalInfo.buttons}
    {#each $modalInfo.buttons as b, i}
    <Button
        standOut animated={!b.primary} pill
        class="{b.primary ? 'primary' : 'secondary'}"
        on:click={() => {
            closeDialog();
            b.clicked = true;
        }}>
        {b.text}
    </Button>
    {/each}
    {/if}
</dialog>

<style lang="scss">
    dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 30em;
        max-height: 25em;
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

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeInFilter {
        from {
            backdrop-filter: blur(0px);
        }

        to {
            backdrop-filter: blur(2px);
        }
    }

    @media (max-width: 768px) {
        dialog {
            width: min(30em, 95vw);
            max-height: 35em;
        }
    }
</style>