import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UnitsComponent} from './units/units.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent, UnitsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
