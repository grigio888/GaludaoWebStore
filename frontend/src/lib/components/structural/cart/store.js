/*
    This module is responsible to control the state of the cart modal.
*/

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let cartModalInfo = writable({
    show: false
});

export let cartStore = writable(
    browser && localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
);

cartStore.subscribe(value => {
    if (browser) localStorage.setItem('cart', JSON.stringify(value));
});

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