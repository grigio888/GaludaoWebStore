<script>
    // ---------- IMPORTS ---------- //
    import { showModal } from "$comp/default/modal/store.js";
    import { _ } from '$translate/i18n';

    // --------- COMPONENTS -------- //
    import Metatags from "$comp/Metatags.svelte";
    import Input from "$comp/default/Input.svelte";
    import Button from '$comp/default/Button.svelte';

    // ----------- LOGIC ----------- //
    let notImplemented = () => {
        showModal({
            title: _("Aviso"),
            content: _("Essa funcionalidade ainda não foi implementada.")
        });
    }
</script>

<Metatags 
    title={_("Login")}
    robots={"noindex, nofollow"}
/>

<section>
    <div class="container">
        <h1>{_("Login")}</h1>
        <form>
            <Input type="text" placeholder={_("Usuário")} />
            <Input type="password" placeholder={_("Senha")} />
            <Button type="submit" title={_("Login")} on:click={notImplemented}>{_("Login")}</Button>
        </form>
        <hr class="vr">
        <Button title={_("Login com Steam")} on:click={notImplemented}>
            <i class="fa-brands fa-steam"></i>
            <span>{_("Login com Steam")}</span>
        </Button>
        <Button title={_("Login com Google")} on:click={notImplemented}>
            <i class="fa-brands fa-google"></i>
            <span>{_("Login com Google")}</span>
        </Button>
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
            padding: 3em 1em 1em;
    
            border: var(--borderWidth) solid var(--themeColor);
            border-radius: var(--borderRadius);

            background-color: var(--backgroundColorFaded);

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