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

    return {
        highlight
    }
}