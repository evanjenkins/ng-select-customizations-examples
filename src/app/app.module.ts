import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectListsComponent } from './modules/components/select-lists/select-lists.component';
import { SelectItemComponent } from './modules/components/select-item/select-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectListsComponent,
    SelectItemComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
