import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';
import {SystemModule} from './system/system.module';
import {UnitsService} from './shared/services/units.service';
import {DateSelectorComponent} from './system/date-selector/date-selector.component';

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
  providers: [UsersService, AuthService, UnitsService, DateSelectorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
