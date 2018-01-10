import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from "./system-routing.module";
import {SystemComponent} from "./system.component";
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemComponent,
    MainComponent
  ]
})
export class SystemModule {

}
