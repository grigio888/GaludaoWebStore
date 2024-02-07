import { _ } from '$translate/i18n';

export function headerOptions() {
    return [
        {
            link: "/",
            icon: "fa-caret-left",
            title: _("Inicio"),
            onlyMobile: true
        },
        {
            link: "/catalog",
            icon: "fa-map",
            title: _("Catálogo"),
            onlyMobile: false
        },
        {
            link: "/catalog#search",
            icon: "fa-magnifying-glass",
            title: _("Procurar"),
            onlyMobile: false
        },
        {
            link: "/login",
            icon: "fa-right-to-bracket",
            title: _("Login"),
            onlyMobile: false
        },
    ]
}