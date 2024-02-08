/*
    Module responsible to manage the modal state.

    The modalInfo store is used to control the modal state. It has the following properties:
    - show: a boolean that indicates if the modal should be shown.
    - title: a string that represents the modal title.
    - content: a string that represents the modal content.
    - showCloseButton: a boolean that indicates if the modal should show a close button.
    - buttons: an array of objects that represents the buttons that should be shown in the modal.
        -
*/

import { writable } from 'svelte/store';

export let modalInfo = writable({
    show: false,
    title: 'Placeholder',
    content: 'Placeholder content',
    showCloseButton: true,
    buttons: []
});

export function showModal({
    title = 'Placeholder',
    content = 'Placeholder content',
    showCloseButton = true,
    buttons = []
    }) {
    modalInfo.set({
        show: true,
        title: title,
        content: content,
        showCloseButton: showCloseButton,
        buttons: buttons
    });
}