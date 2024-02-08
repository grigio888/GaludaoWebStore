/*
    This module is a clone of the modal store, but for the hero modal. It is used to control the state of the hero modal.
*/

import { writable } from 'svelte/store';

export let heroModalInfo = writable({show: false});

export function showHeroModal() {heroModalInfo.set({show: true})}