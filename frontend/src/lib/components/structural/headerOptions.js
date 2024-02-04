export function headerOptions() {
    return [
        {
            link: "/",
            icon: "fa-caret-left",
            title: "Inicio",
            onlyMobile: true
        },
        {
            link: "/catalog",
            icon: "fa-map",
            title: "Catálogo",
            onlyMobile: false
        },
        {
            link: "/catalog#search",
            icon: "fa-magnifying-glass",
            title: "Procurar",
            onlyMobile: false
        },
        {
            link: "/login",
            icon: "fa-right-to-bracket",
            title: "Login",
            onlyMobile: false
        },
    ]
}