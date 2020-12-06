import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PanelDividerComponent } from './panel/panel-divider/panel-divider.component';
import { PanelComponent } from './panel/panel.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PanelDividerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [PanelDividerComponent, PanelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class ResizablePanModule { }
