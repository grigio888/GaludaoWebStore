<!--
    @component Select
    Create a custom select with a list of options.
    To implement the select, use the event 'change' and get the selected option from the event detail.
    It's obligatory to pass the options as an array of objects with the following structure:
    ```json
    options = [
        {
            value: string,
            text: string,
            selected: boolean
        }
    ]
    ```
    - The select can be on top or on bottom.
    - The select can be opened or closed.
    - The select cannot be used in a form. To use it, must be paired with a hidden input.

    @props onTop: boolean
    Whether the select is on top or not, which is the default.

    @props onBottom: boolean
    Whether the select is on bottom or not.

    @props options: array
    Array of objects with the options of the select.

    @events change
    Emited when an option is selected. It contains the selected option.
    ```json
    e.detail = {
        value: string,
        text: string,
        selected: boolean
    }
    ```
-->

<script>
    // ---------- IMPORTS ---------- //
    import { createEventDispatcher } from 'svelte';
    import { clickOutside } from '$lib/tools/clickOutside.js';

    // ----------- PROPS ----------- //
    export let onTop = true;
    export let onBottom = false;
    export let options = [
        {value: '1', text: 'Placeholder 1', selected: true},
        {value: '2', text: 'Placeholder 2', selected: false},
    ];

    // --------- COMPONENTS -------- //
    import ButtonToggle from '$comp/default/ButtonToggle.svelte';

    // ----------- LOGIC ----------- //
    const dispatch = createEventDispatcher()

    // »»» Defining position ««« //
    $: if (onBottom) onTop = false;

    let select;
    let optionContainer;
    $: if (optionContainer) optionContainer.style.width = select.offsetWidth + 'px';
    
    // »»» Defining selected ««« //
    $: selected = options.find((opt) => opt.selected);
    $: if (!selected) selected = options[0];
    
    $: isOpen = false;

    function onChange(i) {
        isOpen = false;
        selected = i;
        dispatch('change', i);
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions svelte-ignore a11y-click-events-have-key-events -->
<div bind:this={select} class="customSelect">
    <span on:click={() => isOpen = !isOpen}>{selected.text}</span>
    <ButtonToggle icon="chevron-down" fontSize=".8em" active={isOpen} on:click={() => isOpen = !isOpen}/>

    <div
        use:clickOutside on:click_outside={() => isOpen = false}
        bind:this={optionContainer} class="options" style:display={isOpen ? 'flex' : 'none'}
        style:top={onBottom ? '100%' : 'auto'} style:bottom={onTop ? '100%' : 'auto'}
        >
        {#each options as option}
        <button type="button" on:click={() => onChange(option)}>{option.text}</button>
        {/each}
    </div>
</div>

<style lang="scss">
    .customSelect {
        position: relative;

        display: flex;
        align-items: center;

        width: 100%;
        min-height: 2.5em;

        border: var(--borderWidth) solid var(--themeColor);
        border-radius: var(--borderRadius);
        
        background-color: rgba(0, 0, 0, .5);

        font-size: .8em;

        cursor: pointer;

        span {
            height: 100%;
            width: 100%;

            padding: .5em;
        }

        > :global(button) {
            position: absolute;
            top: 50%;
            right: .5em;
            transform: translateY(-50%);
        }

        .options {
            position: absolute;

            display: flex;
            flex-direction: column;

            max-height: 10em;

            margin-left: -2px;

            border: var(--borderWidth) solid var(--themeColor);
            border-radius: var(--borderRadius);

            overflow-y: auto;

            z-index: 100;

            button {
                width: 100%;

                padding: .5em;

                border: none;

                background-color: rgba(0, 0, 0, .5);

                color: var(--textColor);
                text-align: left;
                font-family: var(--fontFamily);

                cursor: pointer;

                &:hover {
                    background-color: var(--themeColor);
                    color: var(--backgroundColor);
                }

                // & + button {
                //     // border-top: var(--borderWidth) solid var(--themeColor);
                // }
            }
        }
    }
</style>