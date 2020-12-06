import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDividerComponent } from './panel-divider.component';

describe('PanelDividerComponent', () => {
  let component: PanelDividerComponent;
  let fixture: ComponentFixture<PanelDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
