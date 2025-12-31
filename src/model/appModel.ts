import { createSignal } from "../../core/signal/createSignal";

export const appModel = {
    books: createSignal<any[]>([]),
    favorites: createSignal<string[]>(["/works/OL134333W"]),
};
