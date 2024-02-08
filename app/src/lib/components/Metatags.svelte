<!--
    @component Metadata
    Responsible for the metadata configuration.
    
    @props robots: string
    Define the robots meta tag. Default is 'index, follow'.

    @props title: string
    Define the title of the page.

    @props page_url: string
    Define the url of the page. Default is $page.url.pathname, which is the current page.

    @props image: string
    Define the image of the page. Default is '/favicon.png'.

    @props description: string
    Define the description of the page.

    @props keywords: [string]
    Define the keywords of the page.
-->

<script>
    // ---------- IMPORTS ---------- //
    import { PUBLIC_APP_URL } from '$env/static/public';
    import { page } from '$app/stores';

    import { _ } from '$translate/i18n.js';

    // ----------- PROPS ----------- //
    export let robots = 'index, follow';
    export let title = '';
    export let page_url = $page.url.pathname;
    export let image = `${PUBLIC_APP_URL}/static/favicon.png`;    
    export let description = `${_("Especializada em trade itens de DOTA 2.")} ${_("Melhor preço sempre.")}`;
    export let keywords = [];
</script>

<svelte:head>
    <meta name="robots" content="{ robots }">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Galudão WebStore{ title != '' ? ' - ' + title : '' }</title>

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Galudão WebStore">
    <link rel="apple-touch-icon" href="{ image }">
    <meta name="apple-touch-fullscreen" content="yes">

    <meta property="og:description" content="{_("Loja")} Galudão WebStore - { description }">
    <meta property="og:image" content="{ image }">
    <meta property="og:site_name" content="Galudão WebStore">
    <meta property="og:title" content="Galudão WebStore{ title != '' ? ' - ' + title : '' }">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{ PUBLIC_APP_URL }{ page_url }">

    <meta name="description" content="{_("Loja")} Galudão WebStore - { description }">
    <meta name="keywords" itemprop="keywords" content="galuda web store, store steam, storesteam, galudaowebstore, galudao store, imortal shop, scorpion shop, store.steam, steam store, imortal shop dota 2, galuão, galudao, dota 2 store, dota store, mthsena, galudao dota 2, itens dota 2, itens dota, site de galudão, dota 2 itens, dota2 store, galudão 2022, steam dota 2 store, contato steam, steam dota 2, collector, collectors, collector's, { keywords.toString() }">
    <link rel="shortcut icon" href="{ image }">
    <link rel="icon" href="{ image }">
    <link rel="canonical" href="{ PUBLIC_APP_URL }{ page_url }" />

    <!-- <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@to_replace">
    <meta name="twitter:creator" content="@to_replace">
    <meta name="twitter:title" content="ToReplace{ title != '' ? ' - ' + title : '' }">
    <meta name="twitter:description" content="{_("Loja")} Galudão WebStore - { description }">
    <meta name="twitter:image" content="{ image }">     -->
</svelte:head>