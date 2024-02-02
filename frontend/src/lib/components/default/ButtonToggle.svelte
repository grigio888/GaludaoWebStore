<!--
    @component Toggle - Button
    Create a button with a toggle style, but customizable.

    - The only objetive of this button is to be clicked and dispatch an event.

    @props type: string
    Define the type of the fa icon. Can be 'solid' or 'regular'.

    @props icon: string
    Define the icon of the fa icon. Can be any icon from fontawesome.

    @props animated: boolean
    Whether the button has an animation on click or not.

    @props fontSize: string
    Define the font size of the fa icon.

    @event clicked
    Emited when the button is clicked.
    ```json
    e.detail = {
        active: boolean
    }
    ```
-->

<script>
    // ---------- IMPORTS ---------- //
    import { createEventDispatcher } from 'svelte';

    // ----------- PROPS ----------- //
    export let type = 'solid';
    export let icon = 'question';

    export let animated = true;
    
    export let fontSize = '1.5em';
    export let active = false;

    // ----------- LOGIC ----------- //
    const dispatch = createEventDispatcher();
</script>

<button
    on:click|preventDefault={() => {
        if (animated) active = !active;
        dispatch('click');
    }}
    class:active class:toggleButton={true}
    style:font-size={fontSize}
    >
    <i class="fa-{type} fa-{icon}" />
</button>

<style lang="scss">
    button {
        position: relative;

        width: 1em;
        height: 1em;

        border: none;

        background-color: transparent;
        color: var(--textColor);
        
        cursor: pointer;

        &.active {

            i {
                transform: translate(-50%, -50%) rotate(180deg);
            }
        }

        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            transition: transform;
            transition-duration: var(--transitionFast);
        }
    }
</style>