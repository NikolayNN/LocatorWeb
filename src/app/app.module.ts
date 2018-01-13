import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UnitsComponent} from './system/units/units.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';
import {SystemModule} from './system/system.module';
import {SystemComponent} from './system/system.component';
import {Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {UnitsService} from "./shared/services/units.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    SystemModule
  ],
  providers: [UsersService, AuthService, UnitsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
