import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UnitsService} from '../../shared/services/units.service';
import {Unit} from '../../shared/models/unit.model';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  unitList: Unit[] = [];
  searchStr = '';
  selectedUnit: Unit;

  @Output() onClickUnit = new EventEmitter<Unit>();
  @Output() updateUnitList = new EventEmitter<Unit[]>();

  constructor(private unitsService: UnitsService) {
  }

  ngOnInit() {
    this.unitsService.getUnits().subscribe(units => {
      this.unitList = units;
      this.updateUnitList.emit(this.unitList);
    });
  }

  getSelectedUnitId(unit: Unit) {
    this.selectedUnit = unit;
    this.onClickUnit.emit(unit);
  }

  showModalAddUnit() {
    $('.modal').modal();
  }
}
