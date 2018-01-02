import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UnitsComponent} from './units/units.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddUnitPageComponent } from './add-unit-page/add-unit-page.component';
import { DatesSelectorComponent } from './dates-selector/dates-selector.component';
import { ReportSelectorComponent } from './report-selector/report-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    UnitsComponent,
    SearchPipe,
    MainMenuComponent,
    AddUnitPageComponent,
    DatesSelectorComponent,
    ReportSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
