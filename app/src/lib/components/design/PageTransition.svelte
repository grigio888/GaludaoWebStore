<script>
    import { navigating } from '$app/stores';
    import { fly } from 'svelte/transition'

    export let refresh;

    $: xOut = -50;
    $: xIn = 50;

    $: from = $navigating?.from.route.id;
    $: to = $navigating?.to.route.id;

    $: if (from && to) {
        let fromCount = from == '/' ? 0 : (from.match(/\//g) || []).length;
        let toCount = to == '/' ? 0 : (to.match(/\//g) || []).length;

        if (fromCount > toCount) {
            xOut = 50;
            xIn = -50;
        } else {
            xOut = -50;
            xIn = 50;
        }
    }
</script>

{#key refresh}
<div
    out:fly={{ x: xOut, duration: 400 }}
    in:fly={{ x: xIn, duration: 700, delay: 400 }}
    >
    <slot/>
</div>
{/key}