import { div } from "@core/elements/div";
import { span } from "@core/elements/span";
import { ISignal } from "@core/interfaces/ISignal";

export function loadingIndicator(isLoading: ISignal<boolean>): HTMLElement {
    return isLoading.get()
        ? div()
              .children([
                  div()
                      .children([span().innerHTML("Загрузка...").get()])
                      .className("p-20 bg-secondary text-secondary rounded-8  border-secondary")
                      .get(),
              ])
              .left("0")
              .top("0")
              .className("absolute w-full h-full flex items-center justify-center")
              .get()
        : div().get();
}
