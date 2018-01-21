import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { UnitInfoComponent } from './unit-info/unit-info.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { ReportSelectorComponent } from './report-selector/report-selector.component';
import {UnitsComponent} from './units/units.component';
import {SearchPipe} from './units/search.pipe';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNbGZv2S3KMuJkCfCUXsX_kxV99gHEfbk'
    })
  ],
  declarations: [
    SystemComponent,
    UnitsComponent,
    MapComponent,
    HeaderComponent,
    UnitInfoComponent,
    DateSelectorComponent,
    ReportSelectorComponent,
    SearchPipe
  ]
})
export class SystemModule {

}
