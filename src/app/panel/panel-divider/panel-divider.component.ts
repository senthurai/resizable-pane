import { AfterViewInit, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { IDivider, IPanel } from '../../modal/interface/interface';


@Component({
  selector: 'bb-panel-divider',
  templateUrl: './panel-divider.component.html',
  styleUrls: ['./panel-divider.component.scss']
})
export class PanelDividerComponent implements OnInit, AfterViewInit, IDivider {

  @Input() axis = '';
  @Input() parent?: IPanel;
  @Input() id = '';
  constructor() {
  }

  @HostBinding('style.width') width: any = '';
  @HostBinding('style.height') height: any = '';
  @HostBinding('style.flex-basis') flexBasis: any;
  @HostBinding('style.background') color = 'var(--background-secondary)';

  private isDragging = false;

  ngAfterViewInit(): void {
    if (this.parent && !this.parent.parent && this.parent.children.length > 0) {
      this.fixTransition(this.parent, false);
      this.handleDragging(this.parent, this.axis, 0, true);
      this.fixTransition(this.parent, true);
    }
    this.width = this.axis === 'x' ? '100%' : '5px';
    this.height = this.axis === 'x' ? '5px' : '100%';
  }

  ngOnInit(): void {

  }

  @HostListener('mousedown', ['$event'])
  onMousedown(mouseEvent: MouseEvent): void {
    // start
    if (mouseEvent.which === 1 && this.parent?.children) {
      this.isDragging = true;
      this.fixTransition(this.parent, false);
    }
  }

  private getMouseOffset(mouseEvent: MouseEvent, parent: IPanel): number {
    const panelY = mouseEvent.clientY - parent.getOffsetTop();
    const panelX = mouseEvent.clientX - parent.getOffsetLeft();
    const offset =
      this.axis === 'x' ?
        parent.getOffsetHeight() - (parent.getOffsetHeight() - panelY) :
        parent.getOffsetWidth() - (parent.getOffsetWidth() - panelX);
    return offset;
  }

  private fixTransition(parent: IPanel, unsetValue: boolean): void {
    parent.children.forEach(child => {
      if (unsetValue) {
        child.transition = 'none!important';
      } else {
        child.transition = '';
      }
      this.fixTransition(child, unsetValue);
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent): void {
    if (this.isDragging && this.parent) {
      const offset = this.getMouseOffset(event, this.parent);
      this.handleDragging(this.parent, this.axis, offset, false);
    }
  }

  handleDragging(parent: IPanel, axis: string, offset: number, eventBubble: boolean): void {
    let tLength = (this.axis === 'x') ? parent.getOffsetHeight() : parent.getOffsetWidth();
    let isNotSet = true;
    parent.children.forEach(child => {
      ({ isNotSet, tLength } = this.handleResize(isNotSet, offset, tLength, child, eventBubble));
      if (child.divider) {
        child.divider.handleDragging(child, child.divider.axis, offset, true);
      }
    });
  }

  private handleResize(isNotSet: boolean, offset: number, tLength: any, child: IPanel, eventBubble: boolean)
    : { isNotSet: boolean, tLength: number } {
    if (isNotSet) {
      if (eventBubble) {
        offset = (this.axis === 'x' ? child.getScrollHeight() : child.getScrollWidth()) + 2;
        if ('divider3' === this.id) {
          console.log('offset: -> ' + offset);
        }
      }
      if (offset < tLength) {
        child.flexBasis = offset + 'px';
        tLength = tLength - offset;
      } else {
        child.flexBasis = tLength + 'px';
        tLength = 0;
      }
      isNotSet = false;
    } else {

      child.flexBasis = tLength + 'px';
    }
    return { isNotSet, tLength };
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event: MouseEvent): void {
    // End
    this.isDragging = false;
    if (this.parent) {
      this.fixTransition(this.parent, false);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (this.parent && !this.parent.parent && this.parent.children.length > 0) {
      this.handleDragging(this.parent, this.axis, 0, true);
    }
  }
}
