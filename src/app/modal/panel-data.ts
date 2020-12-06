import { HostBinding, Input } from '@angular/core';

export class PanelData {
    id = '';
    width = '';
    height = '';
    flexBasis = '';


     style: any = {};
     w = 0;
     h = 0;
     vx = 1;
     vy = 1;
     start = 0;
     dragDir = '';
     axis = '';
}