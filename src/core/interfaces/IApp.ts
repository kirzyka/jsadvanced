import { IRoute } from "./IRoute";

export interface IApp {
    title?: string;
    rootElement?: string;
    routes?: IRoute[];
}
