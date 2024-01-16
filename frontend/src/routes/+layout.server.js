/** @type {import('./$types').LayoutLoad} */
import { _ } from '$translate/i18n.js';

export async function load({ locals }) {

    return {
        lang: locals?.lang // needed to set the language client-side
    }
}