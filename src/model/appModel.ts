import { loadFromStorage } from "src/storage/loadFromStorage";
import { createSignal } from "../../core/signal/createSignal";
import { Book } from "../types/Book";
import { IAppModel } from "./IAppModel";

const STORAGE_KEY_FAVORITES = "favorites";

export const appModel: IAppModel = {
    favorites: createSignal<Book[]>(loadFromStorage<Book[]>(STORAGE_KEY_FAVORITES, [])),
    lastSearchHref: createSignal<string>("#/"),
};

appModel.favorites.subscribe(() => {
    const value: Book[] = appModel.favorites.get();

    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(value));
});
