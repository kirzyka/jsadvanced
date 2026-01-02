import { ISignal } from "@core/interfaces/ISignal";
import { Book } from "../types/Book";

export interface IAppModel {
    favorites: ISignal<Book[]>;
    lastSearchHref: ISignal<string>;
}
