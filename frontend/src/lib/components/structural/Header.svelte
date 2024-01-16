<!-- 
    Navbar module.

    This module is responsible for displaying the Header Navbar.
    Z-index is setted a 5000, which must be to top level of the project.
 -->

<script>
    import { IconHome, IconStarFilled, IconSearch, IconShoppingCart } from '@tabler/icons-svelte';
</script>

<header>
    <div></div>
    <navbar>
        <a href="#" class="td-none">
            <IconHome size={18} />
            <span>Pagina Inicial</span>
        </a>
        <a href="#" class="td-none">
            <IconStarFilled size={18} />
            <span>Destaques</span>
        </a>
        <a href="#" class="td-none">
            <IconSearch size={18} />
            <span>Procurar</span>
        </a>
        <a href="#" class="td-none">
            <IconShoppingCart size={18} />
            <span>Carrinho</span>
        </a>
    </navbar>
</header>

<style lang="scss">
    header, navbar, a {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header {
        position: sticky;
        top: 0;
        left: 0;

        height: var(--headerHeight);
        width: 100%;

        padding-inline: 1em;

        background-color: var(--backgroundColor);

        border-bottom: 1px solid var(--themeColor);

        z-index: 5000;

        navbar {

            gap: 1em;

            a {
                gap: .25em;
            }
        }
    }
</style>