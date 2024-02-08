import { PUBLIC_APP_URL } from '$env/static/public';
import { Heroes } from '$db/models/products.js';

export async function load ({ locals }) {
    let highlight = {
        // this variable must a API fetch to highlights endpoint.
        "count": 5,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 27,
                "used_by": "phantom_assassin",
                "rarity": "Sets",
                "id_steam": 0,
                "title": "Phantom Assassin -  Arcana  + Collector",
                "description": "conjunto",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Arcana__Collector.PNG",
                "steam_price": 200.0,
                "store_price": 170.0,
                "offer": true,
                "available": true
            },
            {
                "id": 28,
                "used_by": "outros",
                "rarity": "Imortal",
                "id_steam": 0,
                "title": "Onibi",
                "description": "lvl 20",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Courier__-_Onibi.PNG",
                "steam_price": 100.0,
                "store_price": 80.0,
                "offer": true,
                "available": true
            },
            {
                "id": 29,
                "used_by": "outros",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "Axolote",
                "description": "lvl 4",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Courier__-_Axolote.PNG",
                "steam_price": 37.0,
                "store_price": 27.0,
                "offer": true,
                "available": true
            },
            {
                "id": 30,
                "used_by": "outros",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "Hermes",
                "description": "Égide Brilhante",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Courier__-_Hermes.PNG",
                "steam_price": 40.0,
                "store_price": 35.0,
                "offer": true,
                "available": true
            },
            {
                "id": 32,
                "used_by": "outros",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "Grillhound do Star Ladder lvl 1000",
                "description": "Courier",
                "image": "https://www.galudaowebstore.com.br/media/store-images/courier_star_leader.jpg",
                "steam_price": 80.0,
                "store_price": 60.0,
                "offer": true,
                "available": true
            }
        ]
    }
    let search = {
        "count": 10,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 4,
                "used_by": "abaddon",
                "rarity": "Mitico",
                "id_steam": 22314976099,
                "title": "Abbadon - Collector Blightfall",
                "description": "Collector's Cache Aghanim's 2021",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Blightfall-Abaddon.JPG",
                "steam_price": 30.0,
                "store_price": 30.0,
                "offer": false,
                "available": true
            },
            {
                "id": 6,
                "used_by": "alchemist",
                "rarity": "Mitico",
                "id_steam": 22318405651,
                "title": "Alchemist - Collector Cosmic Concoctioneers",
                "description": "Collector's Cache Aghanim's 2021",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Cosmic_Concoctioneers.JPG",
                "steam_price": 40.0,
                "store_price": 35.0,
                "offer": false,
                "available": true
            },
            {
                "id": 24,
                "used_by": "ancient_apparition",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "AA - Collector  Segredo da  Singularidade",
                "description": "Collector",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Collector_AA_-_Segredo_da__Singularidade.PNG",
                "steam_price": 35.0,
                "store_price": 30.0,
                "offer": false,
                "available": true
            },
            {
                "id": 25,
                "used_by": "alchemist",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "Alchemist - Collector Transgressão de Sombreja",
                "description": "Collector",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Collector_Alchemist.PNG",
                "steam_price": 35.0,
                "store_price": 30.0,
                "offer": false,
                "available": true
            },
            {
                "id": 27,
                "used_by": "phantom_assassin",
                "rarity": "Sets",
                "id_steam": 0,
                "title": "Phantom Assassin -  Arcana  + Collector",
                "description": "conjunto",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Arcana__Collector.PNG",
                "steam_price": 200.0,
                "store_price": 170.0,
                "offer": true,
                "available": true
            },
            {
                "id": 28,
                "used_by": "outros",
                "rarity": "Imortal",
                "id_steam": 0,
                "title": "Onibi",
                "description": "lvl 20",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Courier__-_Onibi.PNG",
                "steam_price": 100.0,
                "store_price": 80.0,
                "offer": true,
                "available": true
            },
            {
                "id": 29,
                "used_by": "outros",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "Axolote",
                "description": "lvl 4",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Courier__-_Axolote.PNG",
                "steam_price": 37.0,
                "store_price": 27.0,
                "offer": true,
                "available": true
            },
            {
                "id": 30,
                "used_by": "outros",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "Hermes",
                "description": "Égide Brilhante",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Courier__-_Hermes.PNG",
                "steam_price": 40.0,
                "store_price": 35.0,
                "offer": true,
                "available": true
            },
            {
                "id": 31,
                "used_by": "outros",
                "rarity": "Imortal",
                "id_steam": 0,
                "title": "Besourito",
                "description": "lvl 7",
                "image": "https://www.galudaowebstore.com.br/media/store-images/Courier__-_Besourito.PNG",
                "steam_price": 5.0,
                "store_price": 5.0,
                "offer": false,
                "available": true
            },
            {
                "id": 32,
                "used_by": "outros",
                "rarity": "Mitico",
                "id_steam": 0,
                "title": "Grillhound do Star Ladder lvl 1000",
                "description": "Courier",
                "image": "https://www.galudaowebstore.com.br/media/store-images/courier_star_leader.jpg",
                "steam_price": 80.0,
                "store_price": 60.0,
                "offer": true,
                "available": true
            }
        ]
    }
    let rarity = {
        "count": 3,
        "next": null,
        "previous": null,
        "results": [
            {
                id: 0,
                name: "Todos"
            },
            {
                id: 1,
                name: "Comum"
            },
            {
                id: 2,
                name: "Incomum"
            },
            {
                id: 3,
                name: "Raro"
            },
            {
                id: 4,
                name: "Mitico"
            },
            {
                id: 5,
                name: "Imortal"
            },
            {
                id: 6,
                name: "Arcana"
            },
            {
                id: 7,
                name: "Sets"
            }
        ]
    }
    let outdoor = [
        {
            title: 'BEM VINDO À LOJA GALUDÃO WEBSTORE',
            description: `<p>O melhor lugar para você comprar, trocar e vender itens e sets de Dota 2 sempre!</p><p>Sempre as melhores promoções e combinações de itens para você, seja em Collector's, Arcanos, Imortais ou Conjuntos.</p><p>Temos, com certeza, o melhor preço no item que você quer.</p>`,
        },
        {
            title: 'TAMBÉM COMPRAMOS SEUS ITENS!',
            description: `<p>Tá precisando de uma grana extra ou quer trocar algum item por outro?</p><p>O Galudão pode te ajudar!</p><p>Trabalhamos também com Trocas e Negociações com outros itens de Dota2 e, também, de CS:GO.</p>`,
        },
        {
            image: `${PUBLIC_APP_URL}/static/assets/outdoor/galudao_wallpaper.webp`
        }
    ]
    let heroes = []
    await Heroes.findAll().then((data) => {
        data.forEach((item) => {
            heroes.push({
                slug: item.slug,
                title: item.title,
                imageUrl: item.imageUrl
            })
        })
    });

    return {
        highlight,
        search,
        rarity,
        outdoor,
        heroes
    }
}