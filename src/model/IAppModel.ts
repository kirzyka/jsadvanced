import { ISignal } from "../../core/interfaces/ISignal";

export interface IAppModel {
    books: ISignal<any[]>; // Book
    user: ISignal<any>; // User
}
