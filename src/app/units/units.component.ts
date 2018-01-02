import {Component, EventEmitter, Output} from '@angular/core';
import {UnitsService} from '../units.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {
  unitList = [];
  searchStr = '';
  @Output() onClickUnit = new EventEmitter<{id: number}>();

  constructor(private  unitsService: UnitsService) {
  }

  onClickAddUnit() {
    console.log('click');
  }

  ngOnInit() {
    this.unitsService.getUnits().subscribe(units => {
      this.unitList = units;
    });
  }

  // getUnitById(id: long){
  //
  // }
  getSelectedUnitId(id: number) {

    this.onClickUnit.emit({
      id: id
  });
  }
}
