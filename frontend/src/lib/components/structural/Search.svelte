<script>
    // ----------- PROPS ----------- //
    export let pagination;
    export let rarity;

    let selectRarity;

    // ------ PAGE COMPONENTS ------ //

    import Button from '$comp/default/Button.svelte';
    import Select from '$comp/default/Select.svelte';
    import CarrouselWithSmallerCards from '$comp/design/carrousel/WithSmallerCards.svelte';
</script>

<section id="search">
    <div class="title">
        <h1>
            Procurar
        </h1>
        <hr />
    </div>
    <div class="search-display">
        <div class="header">
            <div class="opt">
                <input type="text" value="all" hidden />
                Herói:
                <Button secondary animated pill standOut>Selecionar</Button>
            </div>
            <div class="opt">
                <select bind:this={selectRarity} name="rarity" id="rarity">
                    {#each rarity.results as r}
                        <option value={r.id} selected={r.name == "Todos"}>{r.name}</option>
                    {/each}
                </select>
                Raridade:
                <Select options={
                    rarity.results.map((r) => {
                        return {value: r.id, text: r.name, selected: r.name == "Todos"}
                    })
                } on:change={
                    (e) => selectRarity.value = e.detail.value
                } />
            </div>
        </div>
        <hr class="vr">
        <div class="search-results">
            <CarrouselWithSmallerCards
                options={pagination}
                on:previous={() => console.log('Search prev page')}
                on:next={() => console.log('Search next page')}
            />
        </div>
    </div>
</section>

<style lang="scss">
    section, .title, .search-display, .header, .header .opt {
        display: flex;
        align-items: center;
    }

    section {
        flex-direction: column;
        gap: 2em;

        width: 100%;

        hr {
            height: var(--borderWidth);
            width: 100%;

            border-color: var(--themeColor);
        }

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
                    
                    select {
                        display: none;
                    }
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