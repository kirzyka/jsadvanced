import { homePage } from "../pages/home/homePage";
import { favoritesPage } from "../pages/favorites/favoritesPage";

export const routes = [
    { path: "", page: homePage },
    { path: "#/", page: homePage },
    { path: "#/favorites", page: favoritesPage },
];
