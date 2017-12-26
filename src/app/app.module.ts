import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UnitsComponent} from './units/units.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UnitsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
