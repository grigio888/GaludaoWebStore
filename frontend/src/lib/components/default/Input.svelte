<script>
    // ----------- PROPS ----------- //
    export let type = 'text';
    export let placeholder = 'Placeholder Example';
</script>

<input
    {type}
    {placeholder}
/>

<style lang="scss">
    input {
        width: 100%;
        padding: .75em .5em;
        margin: 0.5em 0;

        border: var(--borderWidth) solid var(--themeColor);
        border-radius: var(--borderRadius);

        background-color: var(--backgroundColorFaded);
        color: var(--themeColor);

        transition: var(--transition);

        &:focus {
            outline: none;
            border-color: var(--themeColor);
        }
    }
</style>