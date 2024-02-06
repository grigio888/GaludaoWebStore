/*
    This module is responsible to control the state of the cart modal.
*/

import { writable } from 'svelte/store';

let defaultInfo = {
    items: []
}

export let cartModalInfo = writable({
    show: false
});

export let cartStore = writable(defaultInfo);

export function fetchItemInfo() {
    // this function will fetch the item info from the server
}

export function toggleItemInCart(item) {
    cartStore.update((store) => {
        if (store.items.includes(item)) {
            store.items = store.items.filter((i) => i !== item);
        } else {
            store.items.push(item);
        }
        return store;
    });
}