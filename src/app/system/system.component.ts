import {Component, OnInit} from '@angular/core';
import {Unit} from '../shared/models/unit.model';
import {DateSelectorComponent} from './date-selector/date-selector.component';
import {UnitsService} from '../shared/services/units.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html'
})
export class SystemComponent implements OnInit {

  selectedUnit: Unit;

  unitList: Unit[] = [];

  startDate = '';
  startTime = '';
  finishDate = '';
  finishTime = '';

  constructor(private unitsService: UnitsService) {
  }

  ngOnInit() {

  }

  receiveSelectedUnit($event) {
    this.selectedUnit = $event;
    console.log('selected unit');
    console.log(this.selectedUnit);
  }

  receiveDates($event) {
    console.log('date updated');
    console.log($event);
    this.startDate = $event.startDate;
    this.startTime = $event.startTime;
    this.finishDate = $event.finishDate;
    this.finishTime = $event.finishTime;
  }

  receiveUnitWithMessages() {
    console.log('submit!');
    console.log('start' + this.startTime);
    this.unitsService.getUnitWithMessages(
      this.selectedUnit.id, this.startDate,
      this.startTime, this.finishDate, this.finishTime)
      .subscribe((unit: Unit) => {
        if (unit.id > 0) {
          this.selectedUnit = new Unit(unit.unitImei, unit.unitName, unit.id, unit.messages);
          console.log('updated unit')
          console.log(this.selectedUnit);
        }
      });
  }

  receiveUnitList(updatedUnitList) {
    this.unitList = updatedUnitList;
  }
}
