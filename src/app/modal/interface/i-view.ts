import { Component } from '@angular/core';
import { ITitleBar } from './i-title-bar';
export interface IView extends ITitleBar {
    name: string | any;
    data: any;
    isActive: boolean;
    id: string;
    onSelect(): void;
    destroy(): void;
    focusOut(): void;
    getContent(): Component;
}