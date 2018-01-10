import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UnitsComponent} from './system/units/units.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { MainMenuComponent } from './system/main-menu/main-menu.component';
import { AddUnitPageComponent } from './system/add-unit-page/add-unit-page.component';
import { DatesSelectorComponent } from './system/dates-selector/dates-selector.component';
import { ReportSelectorComponent } from './system/report-selector/report-selector.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {SystemModule} from "./system/system.module";
import {SystemComponent} from "./system/system.component";


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
    AuthModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
