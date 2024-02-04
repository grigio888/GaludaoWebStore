<script>
    // ---------- IMPORTS ---------- //
    import { showModal } from "$comp/default/modal/store.js";

    // --------- COMPONENTS -------- //
    import Metatags from "$comp/Metatags.svelte";
    import Input from "$comp/default/Input.svelte";
    import Button from '$comp/default/Button.svelte';

    // ----------- LOGIC ----------- //
    let notImplemented = () => {
        showModal({
            title: "Aviso",
            content: "Essa funcionalidade ainda não foi implementada."
        });
    }
</script>

<Metatags 
    title={"Login"}
    robots={"noindex, nofollow"}
/>

<section>
    <div class="container">
        <h1>Login</h1>
        <form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" title="Login" on:click={notImplemented}>Login</Button>
        </form>
    </div>
</section>

<style lang="scss">
    div, form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }

    section {
        width: 100%;
        
        padding: 5em 7.5em;
        
        div {   
            max-width: 30em;

            margin-inline: auto;
            padding: 1em;
    
            border: var(--borderWidth) solid var(--themeColor);
            border-top: transparent;
    
            border-radius: var(--borderRadius);
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;

            form {
                width: 100%;
            }
        }
    }

    @media (max-width: 768px) {
        section {
            padding: 2em 1em;
        }
    }
</style>