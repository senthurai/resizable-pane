import { ComponentFixture, TestBed } from '@angular/core/testing';

import { panelComponent } from './panel.component';

describe('panelComponent', () => {
  let component: panelComponent;
  let fixture: ComponentFixture<panelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ panelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(panelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
