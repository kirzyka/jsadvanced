import { loadFromStorage } from "src/storage/loadFromStorage";
import { createSignal } from "../../core/signal/createSignal";

const STORAGE_KEY_FAVORITES = "favorites";

export const appModel = {
    favorites: createSignal<string[]>(loadFromStorage<string[]>(STORAGE_KEY_FAVORITES, [])),
};

appModel.favorites.subscribe(() => {
    const value: string[] = appModel.favorites.get();

    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(value));
});
