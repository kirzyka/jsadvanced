import { span } from "@core/elements/span";
import { ISignal } from "@core/interfaces/ISignal";

interface Props {
    totalFound: ISignal<number>;
}

export function totalFoundLabel({ totalFound }: Props) {
    return span().innerHTML(`Найдено книг: ${totalFound.get()}`).className("line-28").get();
}
