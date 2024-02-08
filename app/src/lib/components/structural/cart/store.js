/*
    This module is responsible to control the state of the cart modal.
    It also controls the state of the cart itself, adding, toggling, removing and clearing products.
*/

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

/*
    cartModalInfo: Store that controls the state of the cart modal.
*/
export let cartModalInfo = writable({
    show: false
});

/*
    cartStore: Store that controls the state of the cart itself.

    If the browser is available and there is a cart in the local storage,
    it will be used as the initial value. Otherwise, the initial value will be an empty array.
*/
export let cartStore = writable(
    browser && localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
);

/*
    Subscribe to the cartStore and save its value in the local storage.
    This allows to save the cart right after the cartStore is updated.
*/
cartStore.subscribe(value => {
    if (browser) localStorage.setItem('cart', JSON.stringify(value));
});

/*
    Functions to control the state of the cart itself.
*/
export function addProduct(product) {
    cartStore.update(store => {
        store.push(product);
        return store;
    });
}

export function removeProduct(product) {
    cartStore.update(store => {
        return store.filter(p => p.id !== product.id);
    });
}

export function toggleProduct(product) {
    cartStore.update(store => {
        if (store.find(p => p.id === product.id)) {
            return store.filter(p => p.id !== product.id);
        } else {
            store.push(product);
            return store;
        }
    });
}

export function clearCart() {
    cartStore.set([]);
}