import { IView } from './i-view';

export interface Parentable<T> {
    children: T[];
    parent: T;
}
export interface Iconable {
    id: string;
}
export interface Closable {
    closed: { state: boolean };
    close(): void;
}
export interface Draggable {
    getSource(): string;
}
export interface IPersistance<T> {
    loadData(): T;
    saveData(data: T): void;
    getKey(): string;
}
export interface Resizeable {
    nativeElement: any;
    flexBasis: string;
    parent: Resizeable | undefined;
    children: Resizeable[];
}
export interface IDivider {
    axis: string;
    handleDragging(grandChild: IPanel, axis: string, offset: number, buble: boolean): void;
}

export interface IPanel extends Parentable<IPanel>, Closable, Iconable {
    transition: string;
    flexBasis: string;
    divider?: IDivider;
    id: string;
    class?: any;
    views: IView[];
    name: string;
    getOffsetWidth(): number;
    getOffsetHeight(): number;
    getScrollWidth(): number;
    getScrollHeight(): number;
    getOffsetTop(): number;
    getOffsetLeft(): number;
}
