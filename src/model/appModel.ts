import { createSignal } from "../../core/signal/createSignal";

export const appModel = {
    books: createSignal<any[]>([{ title: "Идиот" }]),
    user: createSignal({ name: "Anton" }),
};
