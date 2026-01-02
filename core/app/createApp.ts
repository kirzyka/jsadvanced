import { IApp } from "../interfaces/IApp";
import { IRoute } from "../interfaces/IRoute";
import { page404 } from "../components/page404";
import { mount } from "./mount";
import { FC } from "../types/FC";
import { getHashPath } from "../navigation/getHashPath";

export function createApp(options: IApp) {
    const { title = "My App", rootElement = "root", routes = [], wrapper = (fc: FC) => fc() } = options;

    let currentPath: string | null = null;
    const route = () => {
        const path = getHashPath();
        const root: HTMLElement | null = document.getElementById(rootElement);
        const route: IRoute | undefined = routes.find((route: IRoute) => route.path === path);

        document.title = title;

        if (!root) {
            console.error("Root element not found");
            return;
        }

        if (path === currentPath) {
            return;
        }

        currentPath = path;
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
