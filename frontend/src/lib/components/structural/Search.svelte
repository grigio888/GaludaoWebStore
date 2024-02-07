<script>
    // ---------- IMPORTS ---------- //
    import { showHeroModal } from '../default/modal/specifics/heroModal/store';
    import { _ } from '$translate/i18n';

    // ----------- PROPS ----------- //
    export let pagination;
    export let rarity;
    export let heroes;

    // ------ PAGE COMPONENTS ------ //
    import HeroModal from '$comp/default/modal/specifics/heroModal/Default.svelte';
    import Button from '$comp/default/Button.svelte';
    import Select from '$comp/default/Select.svelte';
    import CarrouselWithSmallerCards from '$comp/design/carrousel/WithSmallerCards.svelte';
</script>

<section id="search">
    <div class="title">
        <h1>
            {_("Procurar")}
        </h1>
        <hr class="vr"/>
    </div>
    <div class="search-display">
        <div class="header">
            <div class="opt">
                <input type="text" value="all" hidden />
                {_("Heróis")}:
                <Button secondary animated pill standOut on:click={showHeroModal}>{_("Selecionar")}</Button>
            </div>
            <div class="opt">
                {_("Raridade")}:
                <Select options={
                    rarity.results.map((r) => {
                        return {value: r.id, text: r.name, selected: r.name == "Todos"}
                    })
                } on:change={
                    (e) => console.log('Call api to async refresh the search results: ' + e.detail.text.toLowerCase())
                } />
            </div>
        </div>
        <hr class="vr">
        <div class="search-results">
            <CarrouselWithSmallerCards
                options={pagination}
                on:previous={() => console.log('Call api to async refresh the search results to previous page')}
                on:next={() => console.log('Call api to async refresh the search results to next page')}
            />
        </div>
    </div>
</section>

<HeroModal
    {heroes}
    on:closed={(e) => console.log('Call api to async refresh the search results: ' + e.detail)}
/>

<style lang="scss">
    section, .title, .search-display, .header, .header .opt {
        display: flex;
        align-items: center;
    }

    section {
        flex-direction: column;
        gap: 2em;

        width: 100%;

        .title {
            gap: 1em;

            width: 100%;

            text-align: left;

            h1 {
                animation: pulseTextShadow var(--transitionUltraSlow) infinite;
            }

            hr {
                animation: pulseBoxShadow var(--transitionUltraSlow) infinite;
            }
        }

        .search-display {
            flex-direction: column;
            gap: .5em;
            
            width: 100%;

            padding-block: .5em;

            background-color: var(--backgroundColorFaded);

            border: var(--borderWidth) solid var(--themeColor);
            border-radius: var(--borderRadius);

            .header {
                display: flex;
                justify-content: space-evenly;

                width: 100%;
                
                .opt {
                    width: 15em;
                    gap: .5em;
                }
            }

            .search-results {
                width: 100%;
                
                padding: 1em;
            }
        }
    }

    @media (max-width: 768px) {
        section {

            .search-display {
                gap: 1em;
                
                padding-block: 1em;

                .header {
                    display: flex;
                    justify-content: space-evenly;
                    flex-direction: column;
                    gap: 1em;

                    width: 100%;
                    
                    .opt {
                        width: 90%;
                        gap: .5em;
                    }
                }

                .search-results {
                    padding: 0;
                }
            }
        }
    }
</style>