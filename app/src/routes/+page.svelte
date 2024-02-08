<script>
    // ---------- IMPORTS ---------- //
    import { PUBLIC_APP_URL } from '$env/static/public';
    import { _ } from '$translate/i18n';
    
    // --------- COMPONENTS -------- //
    import Metatags from "$comp/Metatags.svelte";
    import Button from '$comp/default/Button.svelte';
</script>

<Metatags 
    title={_("Página Principal")}
/>

<section>
    <img
        src="{PUBLIC_APP_URL}/static/assets/banner/lightning.webp"
        alt="Galudão WebStore LandingPage Banner"
    />

    <h1>
        {_("Especializada em trade itens de DOTA 2.")}
    </h1>
    <h2>
        {_("Melhor preço sempre.")}
    </h2>

    <div class="button-array">
        <Button
            element={"a"} urlTo={"/catalog"} title={"Catálogo"}
            >
            <i class="fa-solid fa-map"></i>
            <span>{_("Catálogo")}</span>
        </Button>
        <Button
            element={"a"} urlTo={"/catalog#search"} title={"Procurar"}
            >
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>{_("Procurar")}</span>
        </Button>
        <Button
            element={"a"} urlTo={"/login"} title={"Login"}
            >
            <i class="fa-solid fa-right-to-bracket"></i>
            <span>{_("Login")}</span>
        </Button>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 70em;

        img {
            width: 100%;
        }

        h1, h2 {
            text-align: center;

            text-shadow: var(--textShadow);
        }

        h2 {
            margin-bottom: 1.5em;
        }

        .button-array {
            display: flex;
            gap: 1em;

            width: 65%;

            >:global(*) {
                width: 33%;

                font-size: 1em;
            }
        }
    }

    @media (max-width: 768px) {
        section {
            width: 95%;

            .button-array {
                flex-direction: column;

                width: 90%;
            }
        }
    }
</style>