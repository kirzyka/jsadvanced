import { IApp } from "../interfaces/IApp";
import { IRoute } from "../interfaces/IRoute";
import { page404 } from "../components/page404";
import { mount } from "./mount";
import { FC } from "../types/FC";

export function createApp(options: IApp) {
    const { title = "My App", rootElement = "root", routes = [], wrapper = (fc: FC) => fc() } = options;

    const route = () => {
        const hash = window.location.hash;
        const root: HTMLElement | null = document.getElementById(rootElement);
        console.log("hash", hash);
        const route: IRoute | undefined = routes.find((route: IRoute) => route.path === hash);

        document.title = title;

        if (!root) {
            console.error("Root element not found");
            return;
        }

        root.innerHTML = "";

        if (route) {
            const page = mount(() => wrapper(() => route.page()));
            root.appendChild(page.el);
        } else {
            console.error("Route not found");
            root.appendChild(page404());
        }
    };

    window.addEventListener("hashchange", route);
    route();
}
