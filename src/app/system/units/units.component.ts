import {Component, OnInit} from '@angular/core';
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

  constructor(private unitsService: UnitsService) {
  }

  ngOnInit() {
    this.unitsService.getUnits().subscribe(units => {
      this.unitList = units;
    });
  }

  showModalAddUnit() {
    $('.modal').modal();
  }

}
