import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { MainComponent } from './main/main.component';
import {UnitsComponent} from "./units/units.component";
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { UnitInfoComponent } from './unit-info/unit-info.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { ReportSelectorComponent } from './report-selector/report-selector.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemComponent,
    MainComponent,
    UnitsComponent,
    MapComponent,
    HeaderComponent,
    UnitInfoComponent,
    DateSelectorComponent,
    ReportSelectorComponent
  ]
})
export class SystemModule {

}
