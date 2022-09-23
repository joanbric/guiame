import { writable } from "svelte/store";

export const destination = writable({})
export const cur_pos = writable({useThisLocation: false, lat: undefined, lng: undefined})
export const address = writable({
    23: {
        name: "Un lugar",
        address: "Es un lugar",
        location: {
            lat: 1,
            lng: 1
        }
    },
    32:{
        name: "Otro lugar",
        address: "el mismo lugar",
        location: {
            lat: 2,
            lng: 2
        }
    }
})