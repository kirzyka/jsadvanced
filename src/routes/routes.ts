import { favoritesPage } from "../pages/favorites/favoritesPage";
import { homePage } from "../pages/home/homePage";

export const routes = [
    { path: "", page: homePage },
    { path: "#/", page: homePage },
    { path: "#/favorites", page: favoritesPage },
];
