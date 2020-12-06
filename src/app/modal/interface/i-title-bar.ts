import { IView } from './i-view';
import { Draggable } from './interface';
export interface ITitleBar extends Draggable {
    setTitle(view: IView): void;
    getTitle(view: string): IView | undefined;
}
