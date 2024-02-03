<script>
    // ----------- PROPS ----------- //
    export let item;

    // ------ PAGE COMPONENTS ------ //
    import Button from "$comp/default/Button.svelte";
</script>

<div class="frame">
    <img
        src="{item.image}"
        alt=""
    />
    <div class="content">
        <div class="title">
            <h2>
                {item.title}
            </h2>
        </div>
        <div class="cta-area">
            <Button secondary animated pill>
                <i class="fa-solid fa-cart-shopping"></i>
                <span>R$ {item.store_price}</span>
            </Button>
        </div>
    </div>
</div>

<style lang="scss">
    .frame {
        position: relative;

        width: 11em;
        height: 13em;

        border: var(--borderWidth) solid var(--themeColor);
        border-radius: var(--borderRadius);

        box-shadow: 0 0 10px var(--shadowColor);

        transition: var(--transitionFast);

        overflow: hidden;

        :global(*) {
            font-size: .95em;
        }

        &:hover {
            transform: scale(1.1);
        }

        img {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            border-radius: var(--borderRadius);

            object-fit: cover;

            z-index: 1;
        }

        .content {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            height: 100%;

            z-index: 2;

            .title {
                width: 100%;

                h2 {
                    padding: .6em 1em .4em;

                    font-size: 0.9em;

                    text-shadow: var(--textShadow);
                }
            }

            .cta-area {
                width: 100%;

                padding: 1em;

                text-align: center;

                span {
                    font-weight: 800;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .frame {
            
            &:hover {
                transform: scale(1.05);
            }
        }
    }
</style>