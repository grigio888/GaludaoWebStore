import { get } from "svelte/store";
import { locale } from "$translate/store";

export function addZeroes(num) {
    return num.toLocaleString(
        get(locale),
        {
            useGrouping: false,
            minimumFractionDigits: 2
        }
    );
}