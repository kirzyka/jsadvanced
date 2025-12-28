"use strict";

import "./app.css";
import { MainView } from "./views/main/main.js";

class App {
    routes = [{ path: "", view: MainView }];
    appState = {
        favorites: [],
    };
    constructor() {
        window.addEventListener("hashchange", this.route.bind(this));
        this.route();
    }

    route() {
        const hash = window.location.hash;
        const view = this.routes.find((route) => route.path === hash).view;

        if (this.currentView) {
            this.currentView.destroy();
        }
        this.currentView = new view(this.appState);
        this.currentView.render();
    }
}

new App();
