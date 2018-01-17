import {Component, ViewChild} from "@angular/core";
import {UnitsComponent} from "./units/units.component";
import {Unit} from "../shared/models/unit.model";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html'
})
export class SystemComponent {

  selectedUnit: Unit;

  receiveSelectedUnit($event) {
    this.selectedUnit = $event;
    console.log('selected unit');
    console.log(this.selectedUnit);
  }
}
