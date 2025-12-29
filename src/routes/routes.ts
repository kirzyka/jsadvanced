import { aboutPage } from "../pages/about/aboutPage";
import { homePage } from "../pages/home/homePage";

export const routes = [
    { path: "", page: homePage },
    { path: "#/", page: homePage },
    { path: "#/about", page: aboutPage },
];
