import { ISignal } from "../../core/interfaces/ISignal";

export interface IAppModel {
    books: ISignal<any[]>; // Book
    favorites: ISignal<string[]>;
}
