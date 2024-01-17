/** @type {import('@sveltejs/kit').Handle} */
import { locale } from '$translate/store.js';

export function handle({ event, resolve }) {
    event.locals = event.locals || {};

    // configuring language
    const requestLanguage = event.request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];

    if (requestLanguage) event.locals.lang = requestLanguage;
    else event.locals.lang = 'pt';

    locale.set(event.locals.lang)

	return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.lang)
    });
}