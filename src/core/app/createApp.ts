import { IApp } from "../interfaces/IApp";
import { IRoute } from "../interfaces/IRoute";
import { AppPage } from "../types/AppPage";
import { page404 } from "../components/page404";

export function createApp(options: IApp) {
    const { title = "My App", rootElement = "root", routes = [] } = options;

    const route = () => {
        const hash = window.location.hash;
        const root: HTMLElement | null = document.getElementById(rootElement);
        const route: IRoute | undefined = routes.find((route: IRoute) => route.path === hash);

        document.title = title;

        if (!root) {
            console.error("Root element not found");
            return;
        }

        root.innerHTML = "";

        if (route) {
            const page: AppPage = route.page;
            root.appendChild(page());
        } else {
            console.error("Route not found");
            root.appendChild(page404());
        }
    };

    window.addEventListener("hashchange", route);
    route();
}
