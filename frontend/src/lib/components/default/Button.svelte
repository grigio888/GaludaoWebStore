<!--
    @component Default - Button
    Create a button with a default style, but customizable.

    - Can be a button or a link.
    - Can be animated.
    - Can stand out.
    - Can be hidden.

    @props element: string
    Element of the button. Can be 'button' or 'a'.

    @props secondary: boolean
    Type of the button, as style. Can be 'primary' or 'secondary'.
    Default as primary. If secondary is set, then is changed.

    @props animated: boolean
    Whether the button has an animation on hover or not.

    @props standOut: boolean
    Whether the button stands out or not.

    @props hidden: boolean
    Whether the button is hidden or not.

    @props notAllowed: boolean
    Whether the button is not allowed or not.

    @props width: string
    Width of the button. Default is '100%'.

    @props urlTo: string
    Url to go to when the button is clicked.

    @props title: string
    Title of the button, to be displayed on hover.

    @props formaction: string
    Action of the form, to be used when the button is inside a form.
-->

<script>
    // ----------- PROPS ----------- //
    export let element = 'button';

    export let secondary = false;
    export let animated = false;
    export let standOut = false;
    export let hidden = false;
    export let notAllowed = false;
    export let pill = false;

    export let width = '100%';

    export let urlTo = '';

    export let title = undefined;

    export let formaction = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
    this={element} {formaction} {title}

    class:primary={!secondary} class:secondary class:animated class:stand-out={standOut}
    class:not-allowed={notAllowed || hidden} class:hidden class:pill

    style:width={width != '0' ? width : false}

    href="{urlTo}" on:click
    >
    <slot />
</svelte:element>

<style lang="scss">
    button, a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;

        padding: 0.5em 1em 0.4em;

        border-radius: var(--borderRadius);

        font-family: var(--defaultFont);

        cursor: pointer;
        text-decoration: none;

        &.primary {
            border: none;

            background-color: var(--themeColor);
            color: var(--backgroundColor);
            font-weight: 700;
        }

        &.secondary {
            border: solid var(--themeColor);
            border-width: var(--borderWidth);

            background-color: transparent;
            color: var(--textColor);

            transition: background-color, color;
            transition-duration: var(--transitionFast);
        }

        &.animated {
            &:hover {
                background-color: var(--themeColor);
                color: var(--backgroundColor);
            }
        }

        &.stand-out {
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.2em;
        }

        &.not-allowed {
            color: darkgray !important;
            pointer-events: none;
        }

        &.pill {
            border-radius: 15em !important;
        }

        &.hidden {
            opacity: 0;
            pointer-events: none;
        }
    }

    a {
        font-size: .84em;
    }
</style>